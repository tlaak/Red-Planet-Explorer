import { ORIENTATIONS, ROTATIONS, DELIMITERS } from './constants';
import Map from './Map';

export default class Operator {
  readInputSequenceToArray(inputSequence) {
    return inputSequence.split('\n');
  }

  // Not really handling errors well, assuming correct input
  parseCommands(inputSequenceArray) {

    // Split the sequences assuming that space will be the delimiter
    const parsedInputArray = inputSequenceArray.map((sequence) => {
      return sequence.split(DELIMITERS.SPACE);
    });

    // Simplest way to get the map coordinates. Not pretty, mutates the array
    const mapSizeData = parsedInputArray.shift();

    // Not pretty, assuming that theres always X, Y and orientation
    const robotInitCommands = parsedInputArray.filter((sequence) => {
      return sequence.length === 3;
    })

    // Assuming that the movement sequence is not empty
    const robotMovementCommands = parsedInputArray.filter((sequence) => {
      return sequence.length === 1 && sequence[0].length > 0;
    })

    // Put the whole thing in one object
    return {
      map: mapSizeData,
      robotCommands: {
        init: robotInitCommands,
        movement: robotMovementCommands
      }
    };
  }

  // Create the map based on the given width and height in the input sequence
  createMap(mapSizeData) {
    // Check if they are valid
    if (mapSizeData.length != 2 && !isInt(mapSizeData[0]) && !isInt(mapSizeData[1])) {
      throw new Error(`Invalid map coordinates: ${mapSize[0]}, ${mapSize[1]}`);
    }
    return new Map(...mapSizeData);
  }

  assignRobots(commands) {
    const map = this.createMap(commands.map);

    commands.init.forEach((initCommand, index) => {
      const robot = new Robot(...initCommand);
      const robotMovementSequence = commands.movement[index];
      robot.moveSequence(robotMovementSequence);
    })
  }

  start() {
    const inputSequence =
    `5 3
    1 1 E
    RFRFRFRF

    3 2 N
    FRRFLLFFRRFLL

    0 3 W
    LLFFFLFLFL`;

    const inputSequenceArray = this.readInputSequenceToArray(inputSequence);
    const commands = parseCommands(inputSequenceArray);
    this.assignRobots(commands);

  }
}
