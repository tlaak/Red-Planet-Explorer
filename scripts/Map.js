import { matrix } from './ArrayHelper';

export default class Map {
  constructor(sizeX, sizeY) {
    this.coordinates = matrix(sizeX, sizeY, { lostOrientations: [] });
  }

  // Mark the positions where a robot was lost and the direction where robot was facing.
  // The corners can have 2 directions
  markLost(posX, posY, orientation) {
    this.coordinates[posX][posY].lostOrientations.push(orientation);
  }
}
