const {
  TURN_LEFT_RULES,
  TURN_RIGTH_RULES,
  CARDINAL_POINTS
} = require('./constants');
const move = (coordenadas, direction) => {
  switch (direction) {
    case CARDINAL_POINTS.NORTE:
      return { ...coordenadas, y: coordenadas.y + 1 };
    case CARDINAL_POINTS.SUR:
      return { ...coordenadas, y: coordenadas.y - 1 };
    case CARDINAL_POINTS.ORIENTE:
      return { ...coordenadas, x: coordenadas.x - 1 };
    case CARDINAL_POINTS.OCCIDENTE:
      return { ...coordenadas, x: coordenadas.x + 1 };
  }
};

const turnRight = (direction) => TURN_RIGTH_RULES[direction];

const turnLeft = (direction) => TURN_LEFT_RULES[direction];

module.exports = {
  move,
  turnRight,
  turnLeft
};
