// Todo require the path and router items needed 
const path = require('path');
const router = require('express').Router();


// TODO add router.get func for each html pages
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});
// * is a catch all
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});



// Todo export thr router

module.exports = router;