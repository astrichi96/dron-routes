const { expect } = require('chai');
const {
  createDirectory,
  writeFile,
  readFiles,
  removeDirectory
} = require('./utils');

const main = require('./index');
const { INPUT_DIR, OUTPUT_DIR, DIRECTORIES_NOT_FOUND } = require('./constants');

describe('Handler module', () => {
  const initialInstructions = ['AAAAIAA', 'DDDAIAD', 'AAIADAD'];
  const coordinatesExpected = [
    '(-2,4) direccion Oriente',
    '(-1,3) direccion Sur',
    '(0,0) direccion Oriente'
  ];

  describe('When the project failed', () => {
    it('When the /input folder does not exists', async () => {
      removeDirectory(INPUT_DIR);
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

  describe('When the project finish sucessfully', () => {
    beforeEach(() => {
      createDirectory(INPUT_DIR);
      createDirectory(OUTPUT_DIR);
      const stream = writeFile(INPUT_DIR, `in01_test.txt`);
      initialInstructions.map((i, index) => {
        const text = index === initialInstructions.length - 1 ? i : `${i}\n`;
        stream.write(text);
      });
      stream.end();
    });

    afterEach(() => {
      removeDirectory(INPUT_DIR);
      removeDirectory(OUTPUT_DIR);
    });

    it('When the output files with the coordinates is generated', async () => {
      await main();
      const results = readFiles(`${OUTPUT_DIR}out01_test.txt`);
      expect(results).to.be.eql(coordinatesExpected);
    });
  });
});
