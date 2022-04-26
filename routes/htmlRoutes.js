// Todo require the path and router items needed 
const path = require('path');
const router = require('express').Router();


// TODO add router.get func for each html pages
router.get('/notes', (rep, res) => {
  res.sendFile(path.join(__dirname, '/Dev/public/notes.html'));
});
// * is a catch all
router.get('*', (rep, res) => {
  res.sendFile(path.join(__dirname, '/Dev/public/index.html'))
});




// Todo export thr router

module.exports = router;