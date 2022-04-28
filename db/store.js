// TODO Require thr util and fs needed
const util = require('util');
const fs = require('fs');

const uuid = require('uuid');

// TODO Util is a built in feature of node like fs

const writeTofile = util.promisify(fs.writeFile);
const readToFile = util.promisify(fs.readFile);
// TODO Req the UUID/v1 package in your package.json
class Store {
  read(){
    return readToFile('./db.json', 'utf8');

  }


  write(){
    // readable
    return writeTofile('./db.json', JSON.stringify(note));
  }

  // get the notes 
  // add the notes to the notes
  // can add delete 
  getNotes() {  
    return this.read().then((notes) => {
      let createdNote; 
        if (createdNote = [].concat(JSON.parse(notes))) {
          return createdNote;
      } else {
        return createdNote = [];
      }
    });
  }

  postNotes(note) {
    const {title, text} = note;

    const newNote = {title, text, id: uuid()};
      // write all updated notes and return the new notes
    return this.getNotes()
      .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
          .then(() => newNote);
    
  }
  // filter out of array of notes and delete specific notes
  
  
}
module.exports = new Store();