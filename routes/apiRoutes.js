// TODO Require the router and db  items needed 
const router = require('express').Router();
// const store = require('../db/store');

const { readFromFile, readAndAppend, writeTofile } = require('../helpers/fsUtils')
const uuid = require('../helpers/uuid');


router.get('/notes', (req, res) => {
  readFromFile("/db/db.json").then((data) => 
  res.json(JSON.parse(data)));
});

// posting
router.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;
    if (req.body) {
      const newNote = {
        title,
          text,
            id: uuid(),
      };
      readAndAppend(newNote, '../db/db.json' );
        res.json('Your note was added!')

    } else {
      res.err('Something is wrong....')
    }
});


// delete logic
router.get('/notes/:id', (req, res) =>{
  const idNote = req.params.id;
    readFromFile('../db/db.json').then((data) =>{
      return JSON.parse(data);
    })

    .then((data) =>{
      writeTofile('../db/db.json', data.filter((note) => note.id !== idNote));
        res.json('Deleted Note!')
    });
});




// router.get('/notes', (req, res) => {
//   console.log('getting all notes')
//   readFiles('../helpers/fsUtils.js')
//     .then((err, notes) => {
//       res.json(notes)
//     })
//     });

// router.post ('/notes', (req, res) => {
//   store
//     .postNotes(req.body)
//     .then((note) => {
//       res.json(note);
//     })
//     .catch (err => {
//       res.status(500).json(err);
//     })
// });


module.exports = router; 
