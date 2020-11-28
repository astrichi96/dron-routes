const path = require('path');

const INPUT_DIR = path.join(__dirname + '/input/');
const OUTPUT_DIR = path.join(__dirname + '/output/');

const INITIAL_VALUES = { direction: 'NORTE', coordinates: { x: 0, y: 0 } };

const DIRECTORIES_NOT_FOUND = {
  INPUT: 'INPUT_DIRECTORY_NOT_FOUND',
  OUTPUT: 'OUTPUT_DIRECTORY_NOT_FOUND'
};

const TURN_RIGTH_RULES = {
  NORTE: 'OCCIDENTE',
  SUR: 'ORIENTE',
  ORIENTE: 'NORTE',
  OCCIDENTE: 'SUR'
};

const TURN_LEFT_RULES = {
  NORTE: 'ORIENTE',
  SUR: 'OCCIDENTE',
  ORIENTE: 'SUR',
  OCCIDENTE: 'NORTE'
};

const INSTRUCTIONS = {
  MOVE: 'A',
  TURN_LEFT: 'I',
  TURN_RIGTH: 'D'
};

module.exports = {
  INPUT_DIR,
  OUTPUT_DIR,
  INITIAL_VALUES,
  DIRECTORIES_NOT_FOUND,
  TURN_RIGTH_RULES,
  TURN_LEFT_RULES,
  INSTRUCTIONS
};
