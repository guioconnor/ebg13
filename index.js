function convertToCharCode(c) {
  return c.charCodeAt();
}

function convertToChar(c) {
  return String.fromCharCode(c);
}

function rotateBy(key) {
  return function rotate(c) {
    if (c >= 65 && c <= 90) {
      return (c + key <= 90) ? c + key : c + key - 90 + 64;
    } else if (c >= 97 && c <= 122) {
      return (c + key <= 122) ? c + key : c + key - 122 + 96;
    }

    return c;
  };
}


function rot13(message, key = 13) {
  if (typeof message !== 'string') {
    return '';
  }

  const rotate = rotateBy(key);

  return message.split('').map(convertToCharCode).map(rotate).map(convertToChar)
    .join('');
}

module.exports = rot13;
