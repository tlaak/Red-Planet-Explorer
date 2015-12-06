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
}
