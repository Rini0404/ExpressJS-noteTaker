const express = require('express');
const fs = require('fs');
const path = require('path');
const everyNote = require('./db/db.json');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// TODO: add routes for our api/html

// app.use("/", htmlRoutes);
// initialize app and create port 
const app = express();
const PORT = 3001;

// set up body parsing, and route ,middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  res.json(everyNote.slice(1));
});



// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// });
// app.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/notes.html'));
// });

// // * is a catch all
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// });


const createNote = (body, notesArr) => {
  const newerNotes = body;
    if(!Array.isArray(notesArr))    
    notesArr = [];
      if (notesArr.length === 0)
        notesArr.push(0);
  body.id = notesArr[0];
    notesArr.push[0]++;
  
  notesArr.push(newerNotes);
    fs.writeFileSync(path.join(__dirname, './db/db.json', JSON.stringify(notesArr, null, 4)));
  return newerNotes;
}
app.post('/api/notes', (req, res) => {
  const newerNotes = createNote(req.body, everyNote);
    res.json(newerNotes);
})
// start the server on the port 
app.listen(PORT, () => console.log(`This port is listening at http://localhost:${PORT}`));