// function to create the journaly entry component

const makeJournalEntryComponent = (entires) => {
  return `
<section>
<h1>${entires.date}</h1>
<div>Journal id: "${entires.id}</div>
<div>Concepts Covered: ${entires.conceptsCovered}</div>
<div>Journal Entry: ${entires.journalEntryText}</div>
<div>Mood of the day: ${entires.todaysMood}</div>
</section>`;
};

export default makeJournalEntryComponent;
