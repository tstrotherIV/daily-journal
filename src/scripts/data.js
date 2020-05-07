// Method to Get the data in entries.json

const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then((response) =>
      response.json()
    );
  },
  saveJournalEntry(creation) {
    return fetch("http://localhost:3000/entries", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creation),
    });
  },
  deleteEntry(entryID) {
    return fetch(`http://localhost:3000/entries/${entryID}`, {
      method: "DELETE",
    });
  },
};

export default API;
