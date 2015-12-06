import { matrix } from './ArrayHelper';

export default class Map {
  constructor(sizeX, sizeY) {
    // Given arguments are upper right coordinates, so increase the width and height by one
    sizeX++;
    sizeY++;
    this.coordinates = matrix(sizeX, sizeY, []);
    this.width = this.coordinates.length;
    this.height = this.coordinates[0].length;
    console.log(`Created map of size ${sizeX},${sizeY}`);
  }

  // Mark the positions where a robot was lost and the direction where robot was facing.
  // The corners can have 2 directions
  markLost(posX, posY, orientation) {
    const currentLost = this.coordinates[posX][posY];
    currentLost.push(orientation);
    this.coordinates[posX][posY] = currentLost;
  }

  // Check if robot was lost on these coordinates
  robotWasLostHere(posX, posY, orientation) {
    console.log(`Check ${posX},${posY} if robot was lost when moving to ${orientation}`);
    return this.coordinates[posX][posY].indexOf(orientation) != -1;
  }
}
