import { ORIENTATIONS, ROTATIONS } from './constants';

export default class Robot {
  constructor(posX = 0, posY = 0, orientation = ORIENTATIONS.NORTH) {
    this.posX = posX;
    this.posY = posY;
    this.orientation = orientation;
  }

  // Rotate command found in sequence. Let's rotate!
  rotate(direction) {
    switch (direction) {
      case ROTATIONS.RIGHT:
        this.turnRight();
        break;
      case ROTATIONS.LEFT:
        this.turnLeft();
        break;
      default:
        throw new Error(`Unknown direction: ${direction}`);
    }
  }

  // Move command found in secuence. Let's move!
  move() {
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
}
