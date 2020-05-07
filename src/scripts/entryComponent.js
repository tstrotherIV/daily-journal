// function to create the journaly entry component

const makeJournalEntryComponent = (entires) => {
  return `
<div class="entries_card">
<h1>${entires.date}</h1>
<div>Journal id: ${entires.id}</div>
<div>Concepts Covered: ${entires.concept}</div>
<div>Journal Entry: ${entires.journal}</div>
<div>Mood of the day: ${entires.mood}</div>
<button id="delete--${entires.id}" class="delete_btn">delete</button>
</div>`;
};

const buildJournalEntry = (date, concept, journal, mood) => ({
  date: date,
  concept: concept,
  journal: journal,
  mood: mood,
});

export default { buildJournalEntry, makeJournalEntryComponent };
