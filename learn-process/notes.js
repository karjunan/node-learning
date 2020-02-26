const fs = require('fs')
const chalk = require('chalk')

const addNote = function(title, body) {
   const notes =  loadNotes()
   const duplicateNotes = notes.filter(function(note) {    
        return note.title === title ? true: false
   })
   console.log('old Notes array =>  ' , notes)
   if(duplicateNotes.length === 0) {
    notes.push( {
        title: title,
        body : body 
    })
    saveNotes(notes);
    console.log('New note added');
   } else {
       console.log('Duplicate note found => ' , duplicateNotes);
   }
   
}

const removeNote = function(title) {
    const notes = loadNotes();
    const index = notes.findIndex(note => note.title === title);
    console.log('Index Value => ' + index );
    if(index != -1) {
        notes.splice(index,1);
        saveNotes(notes);
        console.log(chalk.blue(JSON.stringify(notes)));
    } else {
        console.log(chalk.red(" Note with this title not found !!"));
    }
   
    
    // return notes;
}

const saveNotes = function(notes) {

    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
    loadNotes()
}

const loadNotes = function() {

    try {
        const buffer = fs.readFileSync('notes.json');
        const dataJson = JSON.parse(buffer.toString());
        console.log(dataJson)
        return dataJson;
    } catch (e) {
        console.log(e)
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote : removeNote
}