/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('../model/notesView')
const NotesModel = require('../model/notesModel')

describe('NotesView', () => {
  it('creates an instance of NotesView', () =>  {
    expect(new NotesView()).toBeInstanceOf(NotesView)
  })
})

describe('NotesView#displayNotes', () => {
  it('displays an empty array by default', () =>  {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel()
    model.addNote('hello')
    model.addNote('goodbye')

    const notesView = new NotesView(model)
    notesView.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(2)
  })
})

