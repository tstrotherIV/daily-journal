import getAndRender from "./journal.js";
import API from "./data.js";
import renderJournalEntries from "./entriesDom.js";

const filterButtonsSelection = document.getElementsByName("filterButton");
// console.log(filterButtonsSelection);

const buttonArray = Array.from(filterButtonsSelection);
// console.log(buttonArray);

const filterButtonContainer = document.querySelector(".filterButtons");
filterButtonContainer.addEventListener("click", (event) => {
  if (event.target.id.startsWith("filter--")) {
    const filterButtonID = event.target.id.split("--")[1];
    // console.log(filterButtonID);
    API.getJournalEntries().then((entries) => {
      const filteredList = entries.filter(
        (entry) => entry.mood === filterButtonID
      );
      // console.table(filteredList);
      renderJournalEntries(filteredList);
    });
  }
});
