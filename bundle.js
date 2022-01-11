(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // model/notesModel.js
  var require_notesModel = __commonJS({
    "model/notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // model/notesView.js
  var require_notesView = __commonJS({
    "model/notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addButtonEl = document.querySelector("#input-note");
          this.addButtonEl.addEventListener("click", () => {
            const noteInput = document.querySelector("#note-input").value;
            this.model.addNote(noteInput);
            this.displayNotes();
            document.querySelector("#note-input").value = "";
          });
        }
        displayNotes() {
          this.mainContainerEl.innerHTML = "";
          this.model.getNotes().forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  var notesView = new NotesView(model);
  notesView.displayNotes();
})();
