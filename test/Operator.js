import Operator from '../scripts/Operator'
import { ORIENTATIONS, ROTATIONS } from '../scripts/constants';
import expect from 'expect.js';

const inputSequence =
`5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`;

const parsedSequence = {
  map: ['5', '3'],
  robotCommands: {
    init:
      [
        ['1', '1', 'E'],
        ['3', '2', 'N'],
        ['0', '3', 'W']
      ],
    movement:
      [
        ['RFRFRFRF'],
        ['FRRFLLFFRRFLL'],
        ['LLFFFLFLFL']
      ]
  }
};

const operator = new Operator();

describe('Reading the command sequence', () => {
  it('should return the sequence parsed to an array', (done) => {
    expect(operator.readInputSequenceToArray(inputSequence)).to.eql(['5 3', '1 1 E', 'RFRFRFRF', '', '3 2 N', 'FRRFLLFFRRFLL', '', '0 3 W', 'LLFFFLFLFL']);
      done();
  });
});

describe('Parsing the command sequences', () => {
  it('should return the commands parsed to arrays', (done) => {
    const parsedInputSequence = operator.readInputSequenceToArray(inputSequence);
    const commandSequenceArrays = operator.parseCommands(parsedInputSequence);
    expect(commandSequenceArrays).to.eql(parsedSequence);
    done();
  });
});
