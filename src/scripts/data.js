// Method to Get the data in entries.json

const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then((response) =>
      response.json()
    );
  },
};

export default API;
