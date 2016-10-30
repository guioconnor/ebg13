function convertToCharCode(c) {
  return c.charCodeAt();
}

function convertToChar(c) {
  return String.fromCharCode(c)
}

function rotate(c) {
  if(c>=65 && c<=90) {
    return (c+13 <= 90) ? c+13 : c+13-90+64;
  }
  else if(c>=97 && c<=122) {
    return (c+13 <= 122) ? c+13 : c+13-122+96;
  }
  else {
    return c;
  }
}


function rot13(message) {
  if(typeof message !== 'string') {
    return '';
  }

  return message.split('').map(convertToCharCode).map(rotate).map(convertToChar).join('');
}

module.exports = rot13;