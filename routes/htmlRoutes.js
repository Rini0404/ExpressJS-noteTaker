// Todo require the path and router items needed 
const path = require('path');
const { readFromFile } = require('../Dev/db copy/fsUtils');
const htmlRouter = require('express').Router();
const uuid = require('./uuid.js')

// TODO add router.get func for each html pages
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/Dev/public/notes.html'));
});
// * is a catch all
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/Dev/public/index.html'))
});

htmlRouter.get ('/', (req, res) => {
  console.log(`${req.method} Received!`);
    readFromFile('./htmlRoutes.js').then((data) =>res.json(JSON.parse(data)));

})

htmlRouter.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit feedback`);

const { title, text, id } = red.body;
if (title && text && id) {
  const sample = { 
    title, 
      text, 
      text_id: uuid(),
  };
  readAndAppend(sample, './db/htmlRoutes.js');

  const response = {
    status: 'success',
    body: sample,
  };
  res.json(response);
  } else{
  res.json('ERROR')
}

});

// Todo export thr router

module.exports = router;