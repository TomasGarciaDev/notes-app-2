const NotesModel = require('./notesModel')

class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    
    this.addButtonEl = document.querySelector('#input-note')
    this.addButtonEl.addEventListener('click', () => {
      const noteInput = document.querySelector('#note-input').value
      this.model.addNote(noteInput)
      
      this.displayNotes()
      document.querySelector('#note-input').value = ''
    }) 
  }

  displayNotes() {
    this.mainContainerEl.innerHTML = ''
    this.model.getNotes().forEach(note => {
      const noteEl = document.createElement('div')
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
      
    })
  }
}

module.exports = NotesView