const { expect } = require('chai');
const utils = require('./utils');
let { main } = require('./deliveryRunner');

const {
  INPUT_DIR,
  OUTPUT_DIR,
  DIRECTORIES_NOT_FOUND,
  CARDINAL_POINTS
} = require('./constants');

describe('Handler module', () => {
  const initialInstructions = ['AAAAIAA', 'DDDAIAD', 'AAIADAD'];
  const results = [
    { coordinates: { x: -2, y: 4 }, direction: CARDINAL_POINTS.ORIENTE },
    { coordinates: { x: -1, y: 3 }, direction: CARDINAL_POINTS.SUR },
    { coordinates: { x: -0, y: 0 }, direction: CARDINAL_POINTS.ORIENTE }
  ];
  const coordinatesExpected = results.map((result) => utils.buildRow(result));

  beforeAll(() => {
    utils.removeDirectory(INPUT_DIR);
    utils.removeDirectory(OUTPUT_DIR);
    utils.createDirectory(INPUT_DIR);
    const path = `${INPUT_DIR}in01_test.txt`;

    utils.writeRows(path, initialInstructions.join('\n'));
  });

  afterEach(() => {
    utils.removeDirectory(INPUT_DIR);
    utils.removeDirectory(OUTPUT_DIR);
  });

  describe('When the project finish sucessfully', () => {
    it('When the output files with the coordinates is generated', async () => {
      await main();
      const results = utils.readFiles(`${OUTPUT_DIR}out01_test.txt`);
      expect(results).to.be.eql(coordinatesExpected);
    });
  });

  describe('When the project failed', () => {
    it('When the /input folder does not exists', async () => {
      try {
        await main();
      } catch (error) {
        expect(error.message).to.equal(DIRECTORIES_NOT_FOUND.INPUT);
        isFailed = true;
      }
      expect(isFailed).to.be.true;
    });
  });
});
