const startCase = require('lodash/startCase');
const { move, turnLeft, turnRight } = require('./actions');

// Write a new row on Stream file
const writeNewRow = (stream, row) => stream.write(row);

const processingFiles = (stream, list, initialValues) => {
  let { coordinates, direction } = initialValues;
  list.map((instructions) => {
    const result = mapCoordinates(coordinates, direction, instructions);
    coordinates = result.coordinates;
    direction = result.direction;
    buildRow(stream, result);
  });
  stream.end();
};

const mapCoordinates = (coordinates, direction, instructions) => {
  for (const item of instructions) {
    if (item === 'A') coordinates = move(coordinates, direction);
    if (item === 'D') direction = turnRight(direction);
    if (item === 'I') direction = turnLeft(direction);
  }

  return { coordinates, direction };
};

const buildRow = (stream, data) => {
  const {
    coordinates: { x, y },
    direction
  } = data;
  const row = `(${x},${y}) direccion ${startCase(direction)}\n`;
  return writeNewRow(stream, row);
};

module.exports = {
  processingFiles
};
