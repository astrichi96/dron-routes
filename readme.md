# Get instructions and calculate the final dron position witn Node Js

Please check all points before to run the project, in order to prevent any issue or wrong configuration.

## Available Scripts

In the project directory, you can run:

### `npm start`

Run the project, please create a folder named `input` and set there all files with the instructions for each dron. Create the other folder named `output` to save the app results.

### `npm test`

Run the test available in the project, you can also check the coverage running the command with this param `npm test -- --coverage`

For the example case, the input instructions should return this output, however, these are not correct:

- (-2, 4) dirección Norte
- (-3, 3) dirección Sur
- (-4, 2) dirección Oriente

After running the test cases this is the correct output

- (-2,4) direccion Oriente
- (-1,3) direccion Sur
- (0,0) direccion Oriente

## Advanced Configuration

- Please before to run the project, make sure that you have two folders named `input` and `output` in order to process and save the dron instructions

## Summary scaffolding

Important files to complete the calculate delivery point.

- **deliveryRunner.js**: Handle all files at once with Promises and use Promise.all() specifically. This file calls the function that handles line by line per drone.
- **handler.js**: The file is parsed in string arrays, the processRoutes processes position by position and makes the decision to move `(A)`, turn right `(D)` or turn left `(I)` giving the drone a new position in the Cartesian plane.
- **constants.js**: The file has the possible decisions that the project should make in this way:
  - If the drone is in the `North` direction and must advance, one will be added in the Y-axis
  - if the drone is in the `South` position and must advance, one will be subtracted from the Y-axis
  - If the drone is in the East position and must turn right, the position will be changed to the right position at a 90°, the new position should be `North`

### Dependencies:

- **lodash**: In this project it was used to handle the strings and capitalize the direction results (by example: NORTE to Norte).

### Testing dependencies

- **jest**
- **chai**
