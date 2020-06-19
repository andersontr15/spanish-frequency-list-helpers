const fs = require('fs');
const path = require('path');

const SEPARATORS = {
  NEW_LINE: '\n',
};

const FILE_PATH = path.resolve(__dirname, './es.txt');

const FORMAT = 'utf8';

const WORD_MATCH_LIMIT = 100;

const data = fs.readFileSync(FILE_PATH, FORMAT);

const words = data.split(SEPARATORS.NEW_LINE);


const getFrequencyOfWord = word => {
  const targetIndex = words.findIndex(value => {
    const [w, frequency] = value.split(' ');
    return w.toLowerCase() === word.toLowerCase()
  })
  if(targetIndex > -1) {
    const [word, frequency] = words[targetIndex].split(' ')
    return {
      index: `${targetIndex} of ${words.length} words`,
      word,
      frequency: frequency.replace('\r', '')
    }
  }
}

/**
 * Returns the top n words within a range
 * return object { index, word, frequency }
 * @param range Range containing to the to and from values.
 * @param range.from The beginning value of the range.
 * @param range.to The end value of the range.
 */
const getTopNWords = ({ from, to }) =>
  words.slice(from, to).map((word, idx) => {
    const [value, frequency] = word.split(' ');
    return {
      index: idx,
      word: value,
      frequency,
    };
  });

/**
 * Returns the top 100 words for a fuzzy matched query
 */
const fuzzyMatch = ({ query }) => {
  let matchedWords = [];
  for (let i = 0; i < words.length; i++) {
    if (matchedWords.length >= WORD_MATCH_LIMIT) {
      console.log(
        'More than 100 matches. Please make your query more specific',
      );
      break;
    }
    if (words[i].toLowerCase().includes(query)) {
      matchedWords = matchedWords.concat(words[i]);
    }
  }
  return matchedWords;
};

module.exports = {
  fuzzyMatch,
  getFrequencyOfWord,
  getTopNWords,
};
