import Robot from '../scripts/Robot'
import { ORIENTATIONS } from '../scripts/constants';
import expect from 'expect.js';

describe('Robot initialisation', () => {

  const robbo = new Robot();

  it('should have orientation to the north by default', (done) => {
    expect(robbo.orientation).to.be(ORIENTATIONS.NORTH);
    done();
  })

  it('should have position 0,0 by default', (done) => {
    expect(robbo.posX).to.be(0);
    expect(robbo.posY).to.be(0);
    done();
  })

  const asimov = new Robot(12, 15, ORIENTATIONS.SOUTH);

  it('should have position 12,15 and orientation to the south', (done) => {
    expect(asimov.posX).to.be(12);
    expect(asimov.posY).to.be(15);
    expect(asimov.orientation).to.be(ORIENTATIONS.SOUTH);
    done();
  })
});
