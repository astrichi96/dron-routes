const fs = require('fs');
const { DIRECTORIES_NOT_FOUND } = require('../constants');

// Read all files from the input directory
const readdir = (path) => {
  if (!existsDirOrFile(path)) throw Error(DIRECTORIES_NOT_FOUND.INPUT);
  return fs.readdirSync(path);
};

// Read file by file from input directory
const readFiles = (path) => fs.readFileSync(path, 'utf8').split('\n');

// Create stream to write in the file when the row is available
const writeFile = (path, filename) => {
  createDirectory(path);
  return fs.createWriteStream(`${path}${filename}`);
};

const existsDirOrFile = (filePath = '') => fs.existsSync(filePath);

const createDirectory = (filePath) => {
  if (existsDirOrFile(filePath)) return;
  return fs.mkdirSync(filePath);
};

const removeDirectory = (filePath) => {
  if (existsDirOrFile(filePath)) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      fs.unlinkSync(`${filePath}${file}`);
    }
    return fs.rmdirSync(filePath);
  }
};

module.exports = {
  readdir,
  readFiles,
  writeFile,
  createDirectory,
  removeDirectory
};
