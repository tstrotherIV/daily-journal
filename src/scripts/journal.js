// Start of Import Section
import API from "./data.js";
import renderJournalEntries from "./entriesDom.js";
import buildJournalEntry from "./entryComponent.js";
import makeJournalEntryComponent from "./entryComponent.js";
import "./filterListeners.js";
import "./editSubmit.js";
import "./createEntry.js";
import "./editDeleteListener.js";

// Start of section for EventListener of EDIT and DELETE Journal Entry
// const entryOutputContainer = document.querySelector(".entryLog");
// entryOutputContainer.addEventListener("click", (event) => {
//   if (event.target.id.startsWith("edit--")) {
//     const entryID = event.target.id.split("--")[1];
//     API.getJournalEntriesByID(entryID).then((entry) => {
//       prepopulateForm(entry);
//     });
//   }
//   if (event.target.id.startsWith("delete--")) {
//     const entryID = event.target.id.split("--")[1];
//     API.deleteEntry(entryID).then(getAndRender);
//   }
// });
// End of section for EventListener of EDIT and DELETE Journal Entry

// Functin to render to DOM
function renderToDOM(htmlRep) {
  entryOutputContainer.innerHTML += htmlRep;
}
// -END of Function

const entryOutputContainer = document.querySelector(".entryLog");
function getAndRender() {
  entryOutputContainer.innerHTML = "";
  API.getJournalEntries().then((entries) => {
    entries
      .map(makeJournalEntryComponent.makeJournalEntryComponent)
      .forEach(renderToDOM);
  });
}
// Function --See All Journals--
document.querySelector("#getAllJournals").addEventListener("click", (event) => {
  getAndRender();
});
document
  .querySelector("#clearAllJournals")
  .addEventListener("click", (event) => {
    entryOutputContainer.innerHTML = "";
  });

// Edit Entries

function prepopulateForm(entry) {
  formDate.value = entry.date;
  formConcept.value = entry.concept;
  formJournal.value = entry.journal;
  formMood.value = entry.mood;
  formEntryId.value = entry.id;
}

const formEntryId = document.getElementById("entryId");
const formDate = document.getElementById("date");
const formConcept = document.getElementById("concept");
const formJournal = document.getElementById("journal");
const formMood = document.getElementById("formMood");

//Function To clear Form Values
function clearForm() {
  formDate.value = "";
  formConcept.value = "";
  formJournal.value = "";
  formMood.value = "";
  formEntryId.value = "";
}

//Elemtns to Export
export default { getAndRender, clearForm };
