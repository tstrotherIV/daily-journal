const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then((response) =>
      response.json()
    );
  },
  getJournalEntriesByID(entryID) {
    return fetch(`http://localhost:3000/entries/${entryID}`).then((response) =>
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
  updateEntry(updatedEntryObject, id) {
    return fetch(`http://localhost:3000/entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEntryObject),
    }).then((res) => res.json());
  },
};

export default API;
