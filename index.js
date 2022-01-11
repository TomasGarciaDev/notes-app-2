
const NotesModel = require('./model/notesModel')
const NotesView = require('./model/notesView')

// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.



const model = new NotesModel();
// model.addNote('This is an example note');


const notesView = new NotesView(model);

notesView.displayNotes();