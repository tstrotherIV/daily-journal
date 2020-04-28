fetch("http://localhost:3000/entries")
  .then((entries) => entries.json())
  .then((entries) => {
    for (let page of entries) {
      entryLocation.innerHTML += journalComponent(page);
    }
  });

let entryLocation = document.querySelector(".entryLog"),
  journalComponent = (page) => {
    return `
  <section>
  <h1>${page.date}</h1>
  <div>${page.conceptsCovered}</div>
  <div>${page.journalEntryText}</div>
  <div>${page.todaysMood}</div>
  </section>`;
  };
