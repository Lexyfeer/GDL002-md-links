const mdLinks = require('../mdlinks.js');

describe ('pathInserted', () => {
  it('Should return false', () => {
    expect(mdLinks.pathInserted()).toBe (false);
  });
  it('Should return true', () => {
    expect(mdLinks.pathInserted('./test.md')).toBe(true);
  });
})


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});