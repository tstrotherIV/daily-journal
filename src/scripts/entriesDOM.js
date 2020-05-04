import makeJournalEntryComponent from "./entryComponent.js";

// variable function to render to the DOM

const renderJournalEntries = (entries) => {
  for (let index = 0; index < entries.length; index++) {
    let entryLocation = document.querySelector(".entryLog");
    entryLocation.innerHTML += makeJournalEntryComponent(entries[index]);
  }
};

export default renderJournalEntries;
