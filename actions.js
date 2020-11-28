const { TURN_LEFT_RULES, TURN_RIGTH_RULES } = require('./constants');
const move = (coordenadas, direction) => {
  switch (direction) {
    case 'NORTE':
      return { ...coordenadas, y: coordenadas.y + 1 };
    case 'SUR':
      return { ...coordenadas, y: coordenadas.y - 1 };
    case 'ORIENTE':
      return { ...coordenadas, x: coordenadas.x - 1 };
    case 'OCCIDENTE':
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
