/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('../model/notesView')
const NotesModel = require('../model/notesModel')

describe('NotesView', () => {
  it('creates an instance of NotesView', () =>  {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockModel = { notes: [] }
    expect(new NotesView(mockModel)).toBeInstanceOf(NotesView)
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

describe('NotesView#Adding Notes To The Page (via Add Button)', () => {
  it('saves a new note to the model, and displays notes', () =>  {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel()
    const notesView = new NotesView(model)

    const noteInputEl = document.querySelector('#note-input')
    noteInputEl.value = 'interesting note'
  
    const addButtonEl = document.querySelector('#input-note')
    addButtonEl.click()

    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('interesting note')
  })

  it('saves two notes and when displayed doesn\'t repeat them', () =>  {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel()
    const notesView = new NotesView(model)

    const noteInputEl = document.querySelector('#note-input')
    noteInputEl.value = 'interesting note'
  
    const addButtonEl = document.querySelector('#input-note')
    addButtonEl.click()
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('interesting note')

    noteInputEl.value = 'another note'
    addButtonEl.click()
    expect(document.querySelectorAll('div.note')[1].innerText).toEqual('another note')
  })
})






