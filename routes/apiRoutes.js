// TODO Require the router and db  items needed
const fs = require("fs");
const path = require("path");
const router = require("express").Router();
// const store = require('../db/store');

let store = eval(require("../db/db.json"));

const {
  readFromFiles,
  readAndAppend,
  writeTofile,
} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

router.get("/notes", (req, res) => {
  res.json(store);
  // readFromFiles("../db/db.json").then((data) =>
  // res.json(JSON.parse(data)));
});

// posting
router.post("/notes", (req, res) => {
  console.log(req.body);
  store.push(req.body);
  fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(store), () =>
    console.log("Done!!!")
  );
  res.json(store);
});

// delete logic
router.delete("/notes/:title", (req, res) => {
  const title = req.params.title;
  store = store.filter((obj) => obj.title != title);
  console.log('Data:',store);
  fs.writeFileSync(path.join(__dirname,"../db/db.json"), JSON.stringify(store), () => console.log('Done!!!'));
  res.json(store);
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
