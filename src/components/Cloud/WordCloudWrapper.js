import React from 'react';
import { objectOf, number } from 'prop-types';
import ReactWordcloud from 'react-wordcloud';

const options = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: true,
  deterministic: true,
  fontFamily: 'tinos',
  fontSizes: [20, 80],
  fontStyle: 'normal',
  fontWeight: 'bold',
  padding: 1,
  rotations: 2,
  rotationAngles: [-90, 0],
  scale: 'linear',
  spiral: 'rectangular',
  transitionDuration: 0,
};

const convertToWordCloudFormat = (words) => {
  const wordCloudArray = [];

  Object.keys(words).forEach((text) => {
    const value = words[text];

    wordCloudArray.push({ text, value });
  });

  return wordCloudArray;
};

const WordCloudWrapper = ({ words }) => (
  <ReactWordcloud
    words={convertToWordCloudFormat(words)}
    options={options}
  />
);

WordCloudWrapper.propTypes = {
  words: objectOf(number).isRequired,
};

export default WordCloudWrapper;
