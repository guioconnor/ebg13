const rot13 = require('./index');

describe('rot13', () => {
  describe('when using defaults', () => {
    it('should encode a string using rot13 by default', () => {
      const secretMessage = 'Secret Message';
      const expected = 'Frperg Zrffntr';
      const actual = rot13(secretMessage);
      expect(expected).toBe(actual);
    });

    it('should decode a string using rot13 by default', () => {
      const secretMessage = 'Secret Message';
      const encodedMessage = rot13(secretMessage);
      const decodedMessage = rot13(encodedMessage);
      expect(decodedMessage).toBe(secretMessage);
    });
  });

  describe('when using an assymetric key', () => {
    it('should encode a string using caesar cipher when using a key', () => {
      const secretMessage = 'Secret Message';
      const expected = 'Eqodqf Yqeemsq';
      const actual = rot13(secretMessage, 12);
      expect(expected).toBe(actual);
    });

    it('should decode a string using caesar cipher when using a key', () => {
      const secretMessage = 'Secret Message';
      const encodedMessage = rot13(secretMessage, 12);
      const decodedMessage = rot13(encodedMessage, 14);
      expect(decodedMessage).toBe(secretMessage);
    });
  });

  describe('when using non alphabetic chars', () => {
    describe('when message is not a string', () => {
      it('should return an empty string', () => {
        expect(rot13(null)).toBe('');
        expect(rot13()).toBe('');
        expect(rot13(undefined)).toBe('');
        expect(rot13({})).toBe('');
        expect(rot13([])).toBe('');
        expect(rot13(true)).toBe('');
        expect(rot13(123)).toBe('');
      });
    });
    describe('when message contains numbers', () => {
      it('should not encode the numbers in the message', () => {
        const secretMessage = 'Secret Message 123';
        const expectedEncoded = 'Frperg Zrffntr 123';
        const encodedMessage = rot13(secretMessage);
        const decodedMessage = rot13(encodedMessage);

        expect(encodedMessage).toBe(expectedEncoded);
        expect(decodedMessage).toBe(secretMessage);
      });
    });

    describe('when message contains symbols', () => {
      it('should not encode the symbols in the message', () => {
        const secretMessage = 'Secret Message %^&*(';
        const expectedEncoded = 'Frperg Zrffntr %^&*(';
        const encodedMessage = rot13(secretMessage);
        const decodedMessage = rot13(encodedMessage);

        expect(encodedMessage).toBe(expectedEncoded);
        expect(decodedMessage).toBe(secretMessage);
      });
    });

    describe('when message is empty string', () => {
      it('should not change the string at all', () => {
        const secretMessage = '';
        const expectedEncoded = '';
        const encodedMessage = rot13(secretMessage);
        const decodedMessage = rot13(encodedMessage);

        expect(encodedMessage).toBe(expectedEncoded);
        expect(decodedMessage).toBe(secretMessage);
      });
    });
  });
});
