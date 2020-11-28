const fs = require('fs');
const startCase = require('lodash/startCase');
const { move, turnLeft, turnRight } = require('./actions');

const writeNewRow = (outputPath, row) => fs.appendFileSync(outputPath, row);

const processingFiles = (outputPath, list, initialValues) => {
  let { coordinates, direction } = initialValues;
  list.map((instructions, index) => {
    const result = mapCoordinates(coordinates, direction, instructions);
    coordinates = result.coordinates;
    direction = result.direction;
    buildRow(outputPath, result, index + 1 === list.length);
  });
};

const mapCoordinates = (coordinates, direction, instructions) => {
  for (const item of instructions) {
    if (item === 'A') coordinates = move(coordinates, direction);
    if (item === 'D') direction = turnRight(direction);
    if (item === 'I') direction = turnLeft(direction);
  }

  return { coordinates, direction };
};

const buildRow = (outputPath, data, isLastRow) => {
  const {
    coordinates: { x, y },
    direction
  } = data;
  let row = `(${x},${y}) direccion ${startCase(direction.toLowerCase())}`;
  if (!isLastRow) row = `${row}\n`;
  return writeNewRow(outputPath, row);
};

module.exports = {
  processingFiles
};
