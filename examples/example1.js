const { fuzzyMatch, getTopNWords } = require('../index');

console.log(
  fuzzyMatch({
    query: 'zascandil',
  }),
);

console.log(
  getTopNWords({
    from: 100,
    to: 500,
  }),
);
