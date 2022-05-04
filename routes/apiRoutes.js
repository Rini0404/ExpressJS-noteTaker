// TODO Require the router and db  items needed
const fs = require("fs");
const path = require("path");
const router = require("express").Router();


let store = eval(require("../db/db.json"));

const {
  readFromFiles,
  readAndAppend,
  writeTofile,
} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

router.get("/notes", (req, res) => {
  res.json(store);

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

module.exports = router;
