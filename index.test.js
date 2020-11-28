const fs = require('fs');
const { expect } = require('chai');
const utils = require('./utils');

const { INPUT_DIR, OUTPUT_DIR, DIRECTORIES_NOT_FOUND } = require('./constants');

describe('Handler module', () => {
  const initialInstructions = ['AAAAIAA', 'DDDAIAD', 'AAIADAD'];
  const coordinatesExpected = [
    '(-2,4) direccion Oriente',
    '(-1,3) direccion Sur',
    '(0,0) direccion Oriente'
  ];

  beforeAll(() => {
    utils.createDirectory(INPUT_DIR);
    const path = `${INPUT_DIR}in01_test.txt`;
    initialInstructions.map((i, index) => {
      const text = index === initialInstructions.length - 1 ? i : `${i}\n`;
      fs.appendFileSync(path, text);
    });
  });

  afterEach(() => {
    utils.removeDirectory(INPUT_DIR);
    utils.removeDirectory(OUTPUT_DIR);
  });

  let { main } = require('./index');

  describe('When the project finish sucessfully', () => {
    it('When the output files with the coordinates is generated', async () => {
      await main();
      const results = utils.readFiles(`${OUTPUT_DIR}out01_test.txt`);
      expect(results).to.be.eql(coordinatesExpected);
    });
  });

  describe('When the project failed', () => {
    it('When the /input folder does not exists', async () => {
      let isFailed = false;
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
