const keys = require('./index');

describe('keys', () => {
  describe('when passing a seed', () => {
    it('should return the seed as the private key', () => {
      const seed = 12;
      const expected = 12;
      const actual = keys.generate(seed);

      expect(actual.private).toBe(expected);
    });

    it('should return the seed\'s 26 complement as the public key', () => {
      const seed = 12;
      const expected = 14;
      const actual = keys.generate(seed);

      expect(actual.public).toBe(expected);
    });
  });

  describe('when not passing a seed', () => {
    it('random public and private keys should add 26', () => {
      const actual = keys.generate();

      expect(actual.private + actual.public).toBe(26);
    });

    it('should not return 0, 26 or 13 as a key', () => {
      for(let i = 0 ; i < 50 ; i++) {
        const actual = keys.generate();
 
        expect(actual.private).not.toBe(0);
        expect(actual.private).not.toBe(13);
        expect(actual.private).not.toBe(26);
        expect(actual.public).not.toBe(0);
        expect(actual.public).not.toBe(13);
        expect(actual.public).not.toBe(26);
      }
    });
  });

});
