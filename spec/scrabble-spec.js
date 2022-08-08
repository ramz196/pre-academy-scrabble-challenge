// Note: you shouldn't need to change anything in this file.

import Scrabble from '../src/scrabble.js';
let scrabble;

describe("Scrabble", () => {
  it('returns 0 for empty words', () => {
    scrabble = new Scrabble('');

    expect(scrabble.score()).toEqual(0);
  });

  it('returns 0 for whitespace', () => {
    scrabble = new Scrabble(" \t\n");

    expect(scrabble.score()).toEqual(0);
  });

  it('returns 0 for null', () => {
    scrabble = new Scrabble(null);

    expect(scrabble.score()).toEqual(0);
  });

  it('scores short word', () => {
    scrabble = new Scrabble('a');

    expect(scrabble.score()).toEqual(1);
  });

  it('scores short word', () => {
    scrabble = new Scrabble('f');

    expect(scrabble.score()).toEqual(4);
  });

  it('scores a simple word', () => {
    scrabble = new Scrabble('street');

    expect(scrabble.score()).toEqual(6);
  });

  it('scores a more complicated word', () => {
    scrabble = new Scrabble('quirky');

    expect(scrabble.score()).toEqual(22);
  });

  it('scores a case-insensitive word', () => {
    scrabble = new Scrabble('OXYPHENBUTAZONE');

    expect(scrabble.score()).toEqual(41);
  });
});
