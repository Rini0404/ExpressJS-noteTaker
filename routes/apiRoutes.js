// TODO Require the router and db  items needed 
const router = require('express').Router();
const store = require('../db/store');

// TODO set up and get/post/delete methods as response to the database

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
    .postNotes()
    .then((notes) => {
      res.json(notes);
    })
    .catch (err => {
      res.status(500).json(err);
    })
});


// Todo export thr router


module.exports = router; 
