function id() {
  let count = 2;

  return function () {
    return ++count;
  };
}

const generateId = id();

module.exports = generateId;
