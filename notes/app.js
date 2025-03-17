const notesContainer = document.querySelector(".notes");
const noteTextInput = document.querySelector(".note textarea");
const noteCounter = document.querySelector(".note .note__footer .label");
const progress = document.querySelector(".note .progress-bar .inner-bar");
const saveBtn = document.querySelector(".note .note__footer .note__save");

const notesList = JSON.parse(localStorage.getItem("notes")) ?? [];

for (const note of notesList) {
  const newNote = createNote(note.id, note.text);
  notesContainer.insertBefore(newNote, noteTextInput.parentNode);
}

noteTextInput.oninput = () => {
  const noteText = noteTextInput.value;
  noteCounter.textContent = `${100 - noteText.length} left`;
  progress.style.transform = `translateX(-${noteText.length}%)`;
};

function createNote(id, text) {
  const note = document.createElement("div");
  note.className = "note";
  note.id = id;

  const noteBody = document.createElement("div");
  noteBody.className = "note__body";
  noteBody.textContent = text;

  const noteFooter = document.createElement("div");
  noteFooter.className = "note__footer";
  noteFooter.style.justifyContent = "flex-end";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "note__delete";
  deleteBtn.textContent = "Remove";

  noteFooter.append(deleteBtn);
  note.append(noteBody, noteFooter);

  return note;
}

saveBtn.onclick = () => {
  const noteModel = {
    id: uuid.v4(),
    text: noteTextInput.value,
  };
  if (!noteModel.text) return;
  const newNote = createNote(noteModel.id, noteModel.text);
  notesList.push(noteModel);
  localStorage.setItem("notes", JSON.stringify(notesList));
  notesContainer.insertBefore(newNote, noteTextInput.parentNode);
  noteTextInput.value = "";
  noteTextInput.focus();
  noteCounter.textContent = "100 left";
  progress.style.transform = `translateX(0%)`;
};

notesContainer.onclick = (event) => {
  if (event.target.className !== "note__delete") return;

  const targetNote = event.target.parentNode.parentNode;
  const noteId = targetNote.id;
  const removedNoteIndex = notesList.findIndex((x) => x.id === noteId);
  notesList.splice(removedNoteIndex, 1);
  localStorage.setItem("notes", JSON.stringify(notesList));
  targetNote.remove();
};
