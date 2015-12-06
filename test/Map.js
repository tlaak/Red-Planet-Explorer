import Map from '../scripts/Map'
import expect from 'expect.js';
import { ORIENTATIONS } from '../scripts/constants';

describe('Initialising the map', () => {
  const sizeX = 10;
  const sizeY = 20;
  const map = new Map(sizeX, sizeY);

  it('should init the map based on given size', (done) => {
    expect(map.coordinates.length).to.eql(sizeX + 1);
    expect(map.coordinates[0].length).to.eql(sizeY + 1);
    done();
  });
});

describe('Marking the coordinates where robot was lost', () => {
  const sizeX = 5;
  const sizeY = 5;
  const lostMap = new Map(sizeX, sizeY);

  const posX = 4;
  const posY = 0;
  lostMap.markLost(posX, posY, ORIENTATIONS.EAST);
  lostMap.markLost(posX, posY, ORIENTATIONS.SOUTH);

  it('should mark the loss of a robot in the coordinates', (done) => {
    expect(lostMap.coordinates[posX][posY].length).to.be(2);
    done();
  });

  it('should tell which direction robot was moving when it was lost', (done) => {
    expect(lostMap.coordinates[posX][posY]).to.eql([ORIENTATIONS.EAST, ORIENTATIONS.SOUTH]);
    done();
  });
});
