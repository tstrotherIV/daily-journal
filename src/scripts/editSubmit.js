//Editing and Entry, Sumbiting changes, clearing the form

import API from "./data.js";
import journal from "./journal.js";

const formEntryId = document.getElementById("entryId");
const formDate = document.getElementById("date");
const formConcept = document.getElementById("concept");
const formJournal = document.getElementById("journal");
const formMood = document.getElementById("formMood");

// Start of section EDIT and submit
const editFormBtn = document.getElementById("form-submit");
editFormBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const entryId = formEntryId.value;
  const updatedEntryObject = {
    date: formDate.value,
    concept: formConcept.value,
    journal: formJournal.value,
    mood: formMood.value,
  };
  API.updateEntry(updatedEntryObject, entryId).then(journal.getAndRender);
  journal.clearForm();
});
