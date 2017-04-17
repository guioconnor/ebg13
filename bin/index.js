#!/usr/bin/env node

const rot13 = require('../index');
const keys = require('../keys/index');
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const cowsay = require('cowsay');

const description = chalk.inverse;

if (argv['generate-keys']) {
  const seed = argv.seed;
  console.log(keys.generate(seed));
  process.exit();
}

if (!argv._.length) {
  const usageMessage = `
Usage: ebg13 [--generate-keys] [--seed seed] [--key key] message1 [message2 [...]]
  
  --generate-keys - Generages a pair of assymetric keys to be used for encoding/deconding
  --seed seed - uses the seed as the private key and calculates a public key from it
  --key key - [optional] encoding/decoding key (it defaults to 13)
  message1, message2, ... - a list of at least one message to be encoded/decoded

A non empty list og messages is required for encoding/decoding but is
not necessary when generating keys.
  `;

  console.log(cowsay.say({
    text: usageMessage,
  }));

  process.exit(-1);
}

const key = argv.key || 13;
const encodedMessages = argv._.map(message => rot13(message, key));

encodedMessages.forEach(message => console.log(chalk.yellow(message)));
