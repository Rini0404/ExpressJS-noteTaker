// TODO Require the router and db  items needed 
const router = require('express').Router();
const store = require('../db/store');
// const uuid = require('../helpers/uuid');
// const { readFiles  , readAndAppend, writeFile } = require('../helpers/fsUtils')

router.get('/notes', (req, res) => {
  store
    .getNotes() 
    .then ((notes) => {
      return res.json(notes);
    }) 
    .catch (err => {
      res.status(500).json(err);

    })
});

router.post ('/notes', (req, res) => {
  store
    .postNotes(req.body)
    .then((note) => {
      res.json(note);
    })
    .catch (err => {
      res.status(500).json(err);
    })
});


module.exports = router; 
