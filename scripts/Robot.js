import { ORIENTATIONS, ROTATIONS, DELIMITERS, MOVEMENT, STATUS } from './constants';
import Map from './Map';

export default class Robot {
  constructor(posX = 0, posY = 0, orientation = ORIENTATIONS.NORTH, map = new Map(20, 20)) {
    this.posX = posX;
    this.posY = posY;
    this.lastPosX = null;
    this.lastPosY = null;
    this.orientation = orientation;
    this.map = map;
    this.isLost = false;
  }

  // Parse command sequence and turn or move the robot
  moveSequence(sequence) {
    const moveCommands = sequence.split(DELIMITERS.EMPTY);

    // Using for because forEach doesn't support break
    for (let x = 0; x < moveCommands.length; x++) {
      if (this.isLost) {
        break;
      }

      switch (moveCommands[x]) {
        case ROTATIONS.RIGHT:
          this.turnRight();
          break;
        case ROTATIONS.LEFT:
          this.turnLeft();
          break;
        case MOVEMENT.FORWARD:
          this.moveForward();
          break;
        default:
          throw new Error(`Unknown movement command ${moveCommands[x]}`);
      }
    };

    return this.isLost ?
      [this.lastPosX, this.lastPosY, this.lastOrientation, STATUS.LOST]
      :
      [this.posX, this.posY, this.orientation];
  }

  // Let's move!
  moveForward() {
    console.log(`Moving to ${this.orientation}`);

    // Ignore the command to move out from the grid if a robot was lost there
    if (this.map.robotWasLostHere(this.posX, this.posY, this.orientation)) {
      return;
    }

    // Save the current position in case we jump off the grid
    const oldPosX = this.posX;
    const oldPosY = this.posY;

    switch (this.orientation) {
      case ORIENTATIONS.NORTH:
        this.posY++;
        break;
      case ORIENTATIONS.WEST:
        this.posX--;
        break;
      case ORIENTATIONS.SOUTH:
        this.posY--;
        break;
      case ORIENTATIONS.EAST:
        this.posX++;
        break;
      default:
        throw new Error(`Unknown orientation ${this.orientation}`);
    }

    if (!this.isOnTheMap()) {
      console.log(`Not on the map ${this.posX},${this.posY}`);
      this.map.markLost(oldPosX, oldPosY, this.orientation);
      // We still need to be able to return these
      this.lastPosX = oldPosX;
      this.lastPosY = oldPosY;
      this.lastOrientation = this.orientation;
      this.isLost = true;
    }

  }

  // Turn the robot left based on the current orientation
  turnLeft() {
    switch (this.orientation) {
      case ORIENTATIONS.NORTH:
        this.orientation = ORIENTATIONS.WEST;
        break;
      case ORIENTATIONS.WEST:
        this.orientation = ORIENTATIONS.SOUTH;
        break;
      case ORIENTATIONS.SOUTH:
        this.orientation = ORIENTATIONS.EAST;
        break;
      case ORIENTATIONS.EAST:
        this.orientation = ORIENTATIONS.NORTH;
        break;
      default:
        throw new Error(`Unknown orientation ${this.orientation}`);
    }
  }

  // Turn the robot right based on the current orientation
  turnRight() {
    switch (this.orientation) {
      case ORIENTATIONS.NORTH:
        this.orientation = ORIENTATIONS.EAST;
        break;
      case ORIENTATIONS.EAST:
        this.orientation = ORIENTATIONS.SOUTH;
        break;
      case ORIENTATIONS.SOUTH:
        this.orientation = ORIENTATIONS.WEST;
        break;
      case ORIENTATIONS.WEST:
        this.orientation = ORIENTATIONS.NORTH;
        break;
      default:
        throw new Error(`Unknown orientation ${this.orientation}`);
    }
  }

  isOnTheMap() {
    return (
      this.posY >= 0 && this.posY < this.map.height
      &&
      this.posX >= 0 && this.posX < this.map.width
    );
  }
}
