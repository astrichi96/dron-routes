const path = require('path');

const INPUT_DIR = path.join(__dirname + '/input/');
const OUTPUT_DIR = path.join(__dirname + '/output/');

const INITIAL_VALUES = { direction: 'NORTE', coordinates: { x: 0, y: 0 } };

const DIRECTORIES_NOT_FOUND = {
  INPUT: 'INPUT_DIRECTORY_NOT_FOUND',
  OUTPUT: 'OUTPUT_DIRECTORY_NOT_FOUND'
};

module.exports = {
  INPUT_DIR,
  OUTPUT_DIR,
  INITIAL_VALUES,
  DIRECTORIES_NOT_FOUND
};
