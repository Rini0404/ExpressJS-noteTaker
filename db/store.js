// // TODO Require thr util and fs needed
// const util = require('util');
// const fs = require('fs');

// // const uuidv1 = require('uuid').v1

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);
// class Store {
//   read(){
//     return readFileAsync ('db.json', 'utf8');

//   }


//   write(note){
//     // readable
//     return writeFileAsync('db.json', JSON.stringify(note));
//   }

//   // get the notes 
//   // add the notes to the notes
//   // can add delete 
//   getNotes() {  
//     return this.read().then((notes) => {
      
//       let createdNote; 
//         try {createdNote = [].concat(JSON.parse(notes))} 
          
//       catch(err) {
//         createdNote = [];
//       }
//       return createdNote;
//     });
//   }

//   postNotes(note) {
//     const {title, text} = note;
//     const newNote = {title, text};
//       // write all updated notes and return the new notes
//     return this.getNotes()
//       .then((notes) => [...notes, newNote])
//         .then((updatedNotes) => this.write(updatedNotes))
//           .then(() => newNote);
    
//   }
//   // filter out of array of notes and delete specific notes
  
  
// }
// module.exports = new Store();