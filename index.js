const utils = require('./utils');

const handler = require('./handler');
const {
  INPUT_DIR,
  OUTPUT_DIR,
  INITIAL_VALUES,
  DIRECTORIES_NOT_FOUND
} = require('./constants');

const main = async () => {
  return new Promise((resolve, reject) => {
    utils.createDirectory(OUTPUT_DIR);
    try {
      const filenames = utils.readdir(INPUT_DIR);
      for (const filename of filenames) {
        const inputPath = `${INPUT_DIR}${filename}`;
        const outputPath = `${OUTPUT_DIR}${filename.replace('in', 'out')}`;

        const list = utils.readFiles(inputPath);
        handler.processingFiles(outputPath, list, INITIAL_VALUES);
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

module.exports = { main };
main();
