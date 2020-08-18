import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import fetch from 'cross-fetch';

import { isStopword } from './stopwords';
import WordCloudWrapper from './WordCloudWrapper';

const addSubdoc = (subDoc, subDocs) => {
  if (Object.keys(subDoc.words).length !== 0) {
    subDocs.push(subDoc);
  }

  return subDocs;
};

const addWord = (subDoc, word) => {
  const { words } = subDoc;

  if (isStopword(word)) {
    return subDoc;
  }

  if (word in words) {
    words[word] += 1;
  } else {
    words[word] = 1;
  }

  return subDoc;
};

const extractSubDocs = (text) => {
  const subDocs = [];
  const regex = /(subdoc=["'].+?["'])|(lemma=["'].+?["'])/g;
  const matches = text.match(regex);

  if (matches.length === 0) {
    throw new Error('Could not parse XML');
  }

  let currentSubdocName = 'Initial';
  let currentSubdoc = {
    name: currentSubdocName,
    words: {},
  };
  matches.forEach((match) => {
    if (/^subdoc/.test(match)) {
      // eslint-disable-next-line prefer-destructuring
      currentSubdocName = match.match(/subdoc=["'](.+?)["']/)[1];

      if (currentSubdocName !== currentSubdoc.name) {
        addSubdoc(currentSubdoc, subDocs);
        currentSubdoc = {
          name: currentSubdocName,
          words: {},
        };
      }
    }

    if (/^lemma/.test(match)) {
      // Some words have a number following them: e.g. sum1
      // In certain cases this is because there are multiple words with the
      // same dictionary form. But dealing with this edge case creates more
      // complications than it's worth: wordclouds are meant to give a broad
      // overview of the vocabulary of a passage.
      addWord(currentSubdoc, match.match(/lemma=["'](.+?)\d*["']/)[1]);
    }
  });
  addSubdoc(currentSubdoc, subDocs);

  return subDocs;
};

class Cloud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      subDocs: [],
      index: 0,
    };
  }

  componentDidMount() {
    const { match: { params: { url, index = '0' } } } = this.props;

    fetch(decodeURIComponent(url))
      .then((response) => response.text())
      .then((text) => extractSubDocs(text.normalize('NFC')))
      .then((subDocs) => {
        this.setState({
          isLoaded: true,
          subDocs,
          index: parseInt(index, 10),
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render() {
    const {
      error, isLoaded, subDocs, index,
    } = this.state;

    if (error) {
      return (
        <div>
          Error:
          {' '}
          {error.message}
        </div>
      );
    } if (!isLoaded) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <ul>
        <WordCloudWrapper words={subDocs[index].words} />
      </ul>
    );
  }
}

Cloud.propTypes = {
  match: shape({
    params: shape({
      url: string.isRequired,
      index: string,
    }).isRequired,
  }).isRequired,
};

export default Cloud;
