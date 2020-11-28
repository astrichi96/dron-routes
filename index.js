const { main } = require('./deliveryRunner');

(async () => {
  try {
    await main();
    console.log(
      'The routes has been created, See the files in this path: dron-routes/output'
    );
  } catch (error) {
    console.error(error);
  }
})();
