import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";
import buildJournalEntry from "./entryComponent.js";

// Start of section Entry Creation and submit
document
  .getElementById("record-journal-entry")
  .addEventListener("click", (event) => {
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
// End of section Entry Creation and submit
