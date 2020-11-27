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

const turnRight = (direction) => {
  switch (direction) {
    case 'NORTE':
      return 'OCCIDENTE';
    case 'SUR':
      return 'ORIENTE';
    case 'ORIENTE':
      return 'NORTE';
    case 'OCCIDENTE':
      return 'SUR';
  }
};

const turnLeft = (direction) => {
  switch (direction) {
    case 'NORTE':
      return 'ORIENTE';
    case 'SUR':
      return 'OCCIDENTE';
    case 'ORIENTE':
      return 'SUR';
    case 'OCCIDENTE':
      return 'NORTE';
  }
};

module.exports = {
  move,
  turnRight,
  turnLeft
};
