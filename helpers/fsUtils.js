const fs = require("fs");
const util = require("util");
const readFiles = util.promisify(fs.readFile);



const writeFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written in ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
        parsedData.push(content);
          writeFile(file, parsedData);
    }
  });
};

module.exports = {  readFiles , readAndAppend, writeFile};