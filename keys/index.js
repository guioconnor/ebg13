function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateSeed() {
  let seed;

  do {
    seed = getRandomArbitrary(1, 25);
  } while (seed === 13);

  return seed;
}

function generate(seed = generateSeed()) {
  return {
    private: seed,
    public: 26 - seed,
  };
}

module.exports = {
  generate,
};
