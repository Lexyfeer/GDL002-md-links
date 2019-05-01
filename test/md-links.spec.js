const mdLinks = require('../lib/mdlinks.js');
 

// describe ('readFromFolder', () => {
//   it('Should return true', () => {
//     expect(mdLinks.readFromFolder('./')).toBe(true);
//   });
// })

describe('validateExtension', () => {
  it('is a function', () => {
    expect(typeof mdLinks.validateExtension).toBe('function');
  });
});

describe('readFile', () => {
  it('is a function', () => {
    expect(typeof mdLinks.readFile).toBe('function');
  });
});

test('review this link https://es.wikipedia.org/wiki/Markdown', () => {
  expect(mdLinks.validateLinksHTTPS('https://es.wikipedia.org/wiki/Markdown'));
});
