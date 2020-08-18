import React from 'react';
import { objectOf, number } from 'prop-types';
import ReactWordcloud from 'react-wordcloud';

const convertToWordCloudFormat = (words) => {
  const wordCloudArray = [];

  Object.keys(words).forEach((text) => {
    const value = words[text];

    wordCloudArray.push({ text, value });
  });

  return wordCloudArray;
};

const WordCloudWrapper = ({ words }) => (
  <ReactWordcloud words={convertToWordCloudFormat(words)} />
);

export default WordCloudWrapper;

WordCloudWrapper.propTypes = {
  words: objectOf(number).isRequired,
};
