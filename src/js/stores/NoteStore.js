/**
 * Created by YanXiaoLin on 2015/9/17.
 */
var Reflux = require('reflux');
var NoteAction = require('./NoteAction');
var _notes = []; //This is private notes array
var NoteStore = Reflux.createStore({
init: function() {
    // Here we listen to actions and register callbacks
    this.listenTo(NoteAction.createNote, this.onCreate);
    this.listenTo(NoteAction.editNote, this.onEdit);
},
onCreate: function(note) {
    _notes.push(note); //create a new note

    // Trigger an event once done so that our components can update. Also pass the modified list of notes.
    this.trigger(_notes);
},
onEdit: function(note) {
    // Update the particular note item with new text.
    for (var i = 0; i < _notes.length; i++) {
        if(_notes[i]._id === note._id) {
            _notes[i].text = note.text;
            this.trigger(_notes);
            break;
        }
    }
},

//getter for notes
getNotes: function() {
    return _notes;
},

//getter for finding a single note by id
getNote: function(id) {
    for (var i = 0; i < _notes.length; i++) {
        if(_notes[i]._id === id) {
            return _notes[i];
        }
    }
}});
module.exports = NoteStore;
