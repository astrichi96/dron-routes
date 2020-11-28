const fs = require('fs');
const { move, turnLeft, turnRight } = require('./actions');
const { INSTRUCTIONS } = require('./constants');
const { buildRow, writeRows } = require('./utils');

const processRoutes = (outputPath, list, initialValues) => {
  let { coordinates, direction } = initialValues;

  const results = list.map((instructions) => {
    const result = mapCoordinates(coordinates, direction, instructions);
    coordinates = result.coordinates;
    direction = result.direction;
    return buildRow(result);
  });
  writeRows(outputPath, results.join('\n'));
};

const mapCoordinates = (coordinates, direction, instructions) => {
  for (const item of instructions) {
    if (item === INSTRUCTIONS.MOVE) coordinates = move(coordinates, direction);
    if (item === INSTRUCTIONS.TURN_RIGTH) direction = turnRight(direction);
    if (item === INSTRUCTIONS.TURN_LEFT) direction = turnLeft(direction);
  }

  return { coordinates, direction };
};

module.exports = {
  processRoutes
};
