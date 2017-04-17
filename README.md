# ebg13

Simple Rot13 implementation

[![Build Status](https://travis-ci.org/guioconnor/ebg13.svg?branch=master)](https://travis-ci.org/guioconnor/ebg13)

## Basic Rot13 (a.k.a symmetric Caesar Cipher)

### Example use

```
npm install ebg13
```

```
var ebg13 = require('ebg13');

var encodedMessage = ebg13('secret message');

console.log('Decoded message:' + ebg13(encodedMessage));
```

## Assymetric keys

As Rot13 is just a special case of
[Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
with a symmetric key of 13, version 1.2.0 implements a backward
compatible implementation of the algorithm for assymetric keys.

### Example use

```
npm install ebg13
```

```
var caesar = require('ebg13');

var encodedMessage = caesar('secret Message', 12);

console.log('Decoded message:' + caesar(encodedMessage, 14));
```

## Generating keys

If you don't want to generate assymetric keys manually, ebg13 comes
with a convenience generator.

```
var keys = require('ebg13/keys')

myKeys = keys.generate();

var encodedMessage = caesar('secret Message', myKeys.public);

console.log('Decoded message:' + caesar(encodedMessage, myKeys.private));

```

## CLI

From version 1.3.0 ebg13 can be used as a command line tool

### Usage

```
 ___________________________________________________________________________________________
/                                                                                           \
| Usage: ebg13 [--generate-keys] [--seed seed] [--key key] message1 [message2 [...]]        |
|                                                                                           |
|   --generate-keys - Generages a pair of assymetric keys to be used for encoding/deconding |
|   --seed seed - uses the seed as the private key and calculates a public key from it      |
|   --key key - [optional] encoding/decoding key (it defaults to 13)                        |
|   message1, message2, ... - a list of at least one message to be encoded/decoded          |
|                                                                                           |
| A non empty list og messages is required for encoding/decoding but is                     |
| not necessary when generating keys.                                                       |
\                                                                                           /
 -------------------------------------------------------------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

### examples
```
$ ebg message --key 2
oguucig
$ ebg message --generate-keys
{ private: 10, public: 16 }
$ ebg message --generate-keys --seed 1
{ private: 1, public: 25 }
$ ebg message secret "secret message"
zrffntr
frperg
frperg zrffntr
```

## Disclaimer

Rot13 is a playful cryptographic algorithm, it's fun, it's even insighful but it's of absolutely no use in practice, it does not provide any level of security. Do not use is on any data that you are not comfortable sharing publicly. You have been warned.

## ChangeLog

### 1.3.0
* CLI interface
### 1.2.0
* Introduction of assymetric keys
