let allJournalEntries = [
  {
    date: "4/17/2020",
    conceptsCovered: "Daily Journal 1, GitHub practice, Flexbox",
    journalEntryText: "Making more progress and enjoyed working in a team",
    todaysMood: "Happy!"
  },
  {
    date: "4/20/2020",
    conceptsCovered: "JavaScript Objects, DOM manipulation",
    journalEntryText: "Difficult to keep up but making progress",
    todaysMood: "Confused"
  },
  {
    date: "4/21/2020",
    conceptsCovered: "Manipulating the DOM, Ojbects",
    journalEntryText:
      "Today, like most days was difficult but rewarding. Must keep pushing forward!",
    todaysMood: "Dont Ask"

  }
];
// console.log(allJournalEntries)


// --For logging out existing entries via the allJournalEntries array--


const entryLocation = document.querySelector(".entryLog")

let journalComponent = (page) => {
  return `
  <section>
  <h1>${page.date}</h1>
  <div>${page.conceptsCovered}</div>
  <div>${page.journalEntryText}</div>
  <div>${page.todaysMood}</div>
  </section>`
}

for (let i = 0; i < allJournalEntries.length; i++) {
  const page = allJournalEntries[i];
  entryLocation.innerHTML += journalComponent(page)
};


// const container = document.querySelector("#container")


// document.querySelector("#submit").addEventListener("click", event => {
//   const dEntry = document.querySelector("#dateEntry").value
//   const cEntry = document.querySelector("#conceptEntry").value
//   const jEntry = document.querySelector("#journalEntry").value
//   const mEntry = document.querySelector("#moodEntry").value

//   container.innerHTML = `
//         <section>
//             <h1>${dEntry}</h1>
//             <div>${cEntry}</div>
//             <div>${jEntry}</div>
//             <div>${mEntry}</div>
//             </section>
//     `
// })