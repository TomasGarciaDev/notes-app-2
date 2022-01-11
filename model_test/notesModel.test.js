const NotesModel = require('../model/notesModel')

describe('NotesModel', () => {
  it('creates an instance of NotesModel', () => {
    expect(new NotesModel()).toBeInstanceOf(NotesModel)
  })
})

describe('NotesModel#getNotes', () => {
  it('returns an empty array by default', () => {
    const model = new NotesModel()
    expect(model.getNotes()).toEqual([])
  })
})

describe('NotesModel#addNote', () => {
  it('adds note to notesModel instance', () => {
    const model = new NotesModel()
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']
)
  })
})

describe('NotesModel#reset', () => {
  it('clears the notes array', () => {
    const model = new NotesModel()
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset()
    expect(model.getNotes()).toEqual([])
  })
})