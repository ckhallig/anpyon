const database = firebase.database();
const usersRef = database.ref('/users');
addBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(noteId.value).set({
    note_title: note.title,
    note_body: note.body,
    last_modified: note.last_modified
  });
});