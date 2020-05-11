import API from "./data.js";
import journal from "./journal.js";

// Event Listener for Edit and Delete Buttons

// Start of section for EventListener of EDIT and DELETE Journal Entry
const entryOutputContainer = document.querySelector(".entryLog");
entryOutputContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("edit--")) {
    const entryID = event.target.id.split("--")[1];
    API.getJournalEntriesByID(entryID).then((entry) => {
      journal.prepopulateForm(entry);
    });
  }
  if (event.target.id.startsWith("delete--")) {
    const entryID = event.target.id.split("--")[1];
    API.deleteEntry(entryID).then(journal.getAndRender);
  }
});
// End of section for EventListener of EDIT and DELETE Journal Entry
