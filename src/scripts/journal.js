import API from "./data.js";
import renderJournalEntries from "./entriesDom.js";
import buildJournalEntry from "./entryComponent.js";
import makeJournalEntryComponent from "./entryComponent.js";

// API.getJournalEntries().then(renderJournalEntries);
document.querySelector("#submit").addEventListener("click", (event) => {
  // let validate = validateForm();
  // if (validate == false) {
  // } else {
  event.preventDefault();
  let date = document.querySelector("#dateEntry").value;
  let concept = document.querySelector("#conceptEntry").value;
  let journalText = document.querySelector("#journalEntry").value;
  let mood = document.querySelector("#moodEntry").value;
  let newJournalEntry = buildJournalEntry.buildJournalEntry(
    date,
    concept,
    journalText,
    mood
  );

  API.saveJournalEntry(newJournalEntry)
    .then((data) => data.json())
    .then((data) => {
      API.getJournalEntries().then((data) => renderJournalEntries(data));
    });
});

const entryOutputContainer = document.querySelector(".entryLog");
entryOutputContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("delete--")) {
    const entryID = event.target.id.split("--")[1];
    API.deleteEntry(entryID).then(getAndRender);
  }
});

function renderToDOM(htmlRep) {
  entryOutputContainer.innerHTML += htmlRep;
}

function getAndRender() {
  entryOutputContainer.innerHTML = "";
  API.getJournalEntries().then((entries) => {
    entries
      .map(makeJournalEntryComponent.makeJournalEntryComponent)
      .forEach(renderToDOM);
  });
}

// function validateForm() {
//   var x = document.forms["myForm"]["journalEntry"].value;
//   if (x == "") {
//     alert("Journal Entry must be filled out");
//     return false;
//   }
// }

// add delete button to HTML representation with a delete--(songId) and delete_btn class
// test^^
// add click event listener to songs_container to listen for delete buttons
// test^^
// get song Id from button using split
// test^^

// add delete method to API module
// call delete method in event listener and pass in song Id as argument
// test^^
// get all songs and re-render
// test^^
