import Robot from '../scripts/Robot'
import { ORIENTATIONS, ROTATIONS } from '../scripts/constants';
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

describe('Robot orientation change', () => {
  const steve = new Robot(0, 0, ORIENTATIONS.SOUTH);
  steve.turnLeft();

  it('should have position 0,0 and orientation to the east', (done) => {
    expect(steve.posX).to.be(0);
    expect(steve.posY).to.be(0);
    expect(steve.orientation).to.be(ORIENTATIONS.EAST);
    done();
  })

  const bob = new Robot(0, 0, ORIENTATIONS.WEST);
  bob.turnRight();

  it('should have position 12,15 and orientation to the north', (done) => {
    expect(bob.posX).to.be(0);
    expect(bob.posY).to.be(0);
    expect(bob.orientation).to.be(ORIENTATIONS.NORTH);
    done();
  })
});

describe('Robot moving north', () => {
  const robbo = new Robot(10, 10, ORIENTATIONS.NORTH);
  robbo.moveForward();

  it('should have position 0,1 and orientation to the north', (done) => {
    expect(robbo.posX).to.be(10);
    expect(robbo.posY).to.be(11);
    expect(robbo.orientation).to.be(ORIENTATIONS.NORTH);
    done();
  });
});

describe('Robot moving east', () => {
  const robbo = new Robot(10, 10, ORIENTATIONS.EAST);
  robbo.moveForward();

  it('should have position 11,10 and orientation to the east', (done) => {
    expect(robbo.posX).to.be(11);
    expect(robbo.posY).to.be(10);
    expect(robbo.orientation).to.be(ORIENTATIONS.EAST);
    done();
  });
});

describe('Robot moving south', () => {
  const robbo = new Robot(10, 10, ORIENTATIONS.SOUTH);
  robbo.moveForward();

  it('should have position 11,10 and orientation to the east', (done) => {
    expect(robbo.posX).to.be(10);
    expect(robbo.posY).to.be(9);
    expect(robbo.orientation).to.be(ORIENTATIONS.SOUTH);
    done();
  });
});

describe('Robot moving west', () => {
  const robbo = new Robot(10, 10, ORIENTATIONS.WEST);
  robbo.moveForward();

  it('should have position 9,10 and orientation to the west', (done) => {
    expect(robbo.posX).to.be(9);
    expect(robbo.posY).to.be(10);
    expect(robbo.orientation).to.be(ORIENTATIONS.WEST);
    done();
  });
});

describe('Responding to rotation commands', () => {
  const robbo = new Robot(5, 5, ORIENTATIONS.SOUTH);
  robbo.rotate(ROTATIONS.RIGHT);

  it('should have orientation to the west', (done) => {
    expect(robbo.orientation).to.be(ORIENTATIONS.WEST);
    done();
  });

  const asimov = new Robot(5, 5, ORIENTATIONS.WEST);
  asimov.rotate(ROTATIONS.LEFT);

  it('should have orientation to the south', (done) => {
    expect(asimov.orientation).to.be(ORIENTATIONS.SOUTH);
    done();
  });

});

describe('Moving a sequence', () => {
  const robbo = new Robot(1, 1, ORIENTATIONS.EAST);

  it('should move the sequence and return the position', (done) => {
    expect(robbo.moveSequence('RFRFRFRF')).to.be(undefined);
    done();
  });
})
