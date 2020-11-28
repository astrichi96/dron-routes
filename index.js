const { readFiles, readdir, writeFile } = require('./utils');

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
          OUTPUT_DIR,
          `${filename.replace('in', 'out')}`
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
      reject(error);
    }
  });
};

module.exports = main;

main();
