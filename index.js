const fs = require('fs');

const { processingFiles } = require('./handler');
const {
  INPUT_DIR,
  OUTPUT_DIR,
  INITIAL_VALUES,
  DIRECTORIES_NOT_FOUND
} = require('./constants');

const main = () => {
  return new Promise((resolve, reject) => {
    try {
      const filenames = readdir(INPUT_DIR);
      for (const filename of filenames) {
        const list = readFiles(`${INPUT_DIR}${filename}`);
        const stream = writeFile(
          `${OUTPUT_DIR}${filename.replace('in', 'out')}`
        );
        processingFiles(stream, list, INITIAL_VALUES);
      }
      console.log(
        'The routes has been created, See the files in this path: dron-routes/output'
      );
      resolve();
    } catch (error) {
      if (error.message === DIRECTORIES_NOT_FOUND.INPUT)
        console.log('Please create input folder with the files routes');
      if (error.message === DIRECTORIES_NOT_FOUND.OUTPUT)
        console.log('Please create output folder with the files routes');
      reject(error);
    }
  });
};

// Read all files from the input directory
const readdir = (path) => {
  if (!existsDirOrFile(path)) throw Error(DIRECTORIES_NOT_FOUND.INPUT);
  return fs.readdirSync(path);
};

// Read file by file from input directory
const readFiles = (path) => fs.readFileSync(path, 'utf8').split('\n');

// Create stream to write in the file when the row is available
const writeFile = (path) => {
  if (!existsDirOrFile(OUTPUT_DIR)) throw Error(DIRECTORIES_NOT_FOUND.OUTPUT);
  return fs.createWriteStream(path);
};

const existsDirOrFile = (filePath = '') => fs.existsSync(filePath);

main();
