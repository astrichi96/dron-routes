const utils = require('./utils');

const handler = require('./handler');
const { INPUT_DIR, OUTPUT_DIR, INITIAL_VALUES } = require('./constants');

const main = async () => {
  return new Promise((resolve, reject) => {
    utils.createDirectory(OUTPUT_DIR);
    try {
      const filenames = utils.readdir(INPUT_DIR);
      for (const filename of filenames) {
        const inputPath = `${INPUT_DIR}${filename}`;
        const outputPath = `${OUTPUT_DIR}${filename.replace('in', 'out')}`;

        const list = utils.readFiles(inputPath);
        handler.processRoutes(outputPath, list, INITIAL_VALUES);
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { main };
