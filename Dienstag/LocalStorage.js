function saveNote(text) {
    const index = localStorage.length+1;
    const newKey = "Note_"+index;

    localStorage.setItem(newKey, text);
}

function loadNotes() {
    const keys = Object.keys(localStorage);
    keys.forEach(el => console.log(localStorage.getItem(el)));
}

loadNotes();