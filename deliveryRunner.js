const utils = require('./utils');

const handler = require('./handler');
const { INPUT_DIR, OUTPUT_DIR, INITIAL_VALUES } = require('./constants');

const main = async () => {
  utils.createDirectory(OUTPUT_DIR);
  try {
    const filenames = utils.readdir(INPUT_DIR);
    await Promise.all(
      filenames.map((filename) => {
        return new Promise((resolve, reject) => {
          const inputPath = `${INPUT_DIR}${filename}`;
          const outputPath = `${OUTPUT_DIR}${filename.replace('in', 'out')}`;

          const list = utils.readFiles(inputPath);
          handler.processRoutes(outputPath, list, INITIAL_VALUES);
          resolve();
        });
      })
    );
  } catch (error) {
    throw error;
  }
};

module.exports = { main };
