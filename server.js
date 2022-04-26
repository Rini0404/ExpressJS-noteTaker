const express = require('express');
const { fsyncSync } = require('fs');
const path = require('path');
const everyNote = require('./db/db.json');



// TODO: add routes for our api/html
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
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




// * is a catch all
app.get('*', (rep, res) => {
  res.sendFile(path.join(__dirname, '/Dev/public/index.html'))
});
app.get('/', (rep, res) => {
  res.sendFile(path.join(__dirname, '/Dev/public/index.html'))
});
app.get('/notes', (rep, res) => {
  res.sendFile(path.join(__dirname, '/Dev/public/notes.html'));
});

const createNote = (body, notesArr) => {
  const newerNotes = body;
    if(!Array.isArray(notesArr))    
    notesArr = [];
      if (notesArr.length === 0)
        notesArr.push(0);
  body.id = notesArr[0];
    notesArr.push[0]++;
  
  notesArr.push(newerNotes);
    fsyncSync.writeFileSync(path.join(__dirname, './db/db.json'. JSON.stringify(notesArr, null, 4)));
  return newerNotes;
}
app.post('/api/notes', (req, res) => {
  const newerNotes = createNote(req.body, everyNote);
    res.json(newerNotes);
})
// start the server on the port 
app.listen(PORT, () => console.log(`This port is listening at ${PORT}`));