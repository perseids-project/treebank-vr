import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import fetch from 'cross-fetch';
import { Link } from 'react-router-dom';

import { isStopword } from './stopwords';
import WordCloudWrapper from './WordCloudWrapper';

const addSubdoc = (subDoc, subDocs) => {
  if (Object.keys(subDoc.words).length !== 0) {
    if (subDoc.name === '') {
      subDocs.push({
        name: '-',
        words: subDoc.words,
      });
    } else {
      subDocs.push(subDoc);
    }
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
  const regex = /(subdoc=["'].*?["'])|(lemma=["'].*?["'])/g;
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
      currentSubdocName = match.match(/subdoc=["'](.*?)["']/)[1];

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
      // complications than it's worth: word clouds are meant to give a broad
      // overview of the vocabulary of a passage.
      addWord(currentSubdoc, match.match(/lemma=["'](.*?)\d*["']/)[1]);
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
      showDropdown: false,
    };

    this.url = this.url.bind(this);
    this.index = this.index.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.renderWordCloud = this.renderWordCloud.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
  }

  componentDidMount() {
    fetch(this.url())
      .then((response) => response.text())
      .then((text) => extractSubDocs(text.normalize('NFC')))
      .then((subDocs) => {
        this.setState({
          isLoaded: true,
          subDocs,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  url() {
    const { match: { params: { url } } } = this.props;

    return Buffer.from(url, 'base64').toString();
  }

  index() {
    const { match: { params: { index = '0' } } } = this.props;

    return parseInt(index, 10);
  }

  toggleDropdown() {
    this.setState(({ showDropdown }) => ({
      showDropdown: !showDropdown,
    }));
  }

  renderNavigation() {
    const { match: { params: { url } } } = this.props;
    const { subDocs, showDropdown } = this.state;
    const index = this.index();
    const { name } = subDocs[index];

    const docs = subDocs.map((subDoc, newIndex) => (
      // eslint-disable-next-line react/no-array-index-key
      <Link key={`subdoc-${newIndex}`} className="dropdown-item" to={`/${url}/${newIndex}`}>
        {subDoc.name}
      </Link>
    ));

    return (
      <div className="row">
        <div className="col-4 col-md-2 offset-md-2">
          {(index > 0) && <Link to={`/${url}/${index - 1}`} className="btn btn-block btn-secondary">«</Link>}
        </div>
        <div className="col-4">
          <div className="dropdown">
            <button type="button" className="btn btn-block btn-secondary dropdown-toggle" data-toggle="dropdown" onClick={this.toggleDropdown}>
              {name}
              <i className="fa fa-caret-down" />
            </button>
            <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} style={{ maxHeight: '400px', overflow: 'scroll', width: '100%' }}>
              {docs}
            </div>
          </div>
        </div>
        <div className="col-4 col-md-2">
          {(index < subDocs.length - 1) && <Link to={`/${url}/${index + 1}`} className="btn btn-block btn-secondary">»</Link>}
        </div>
      </div>
    );
  }

  renderWordCloud() {
    const {
      error, isLoaded, subDocs,
    } = this.state;
    const index = this.index();

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
      <>
        <div className="row">
          <div className="col">
            {this.renderNavigation()}
          </div>
        </div>
        <div className="row pt-3">
          <div className="col">
            <div style={{ minHeight: '500px' }}>
              <WordCloudWrapper words={subDocs[index].words} />
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    const url = this.url();

    return (
      <>
        <header>
          <div className="row pt-4">
            <div className="col">
              <h1 className="h3">
                Wordcloud from Treebank
              </h1>
              <h2 className="h6">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </h2>
            </div>
          </div>
        </header>
        <div className="row pt-2">
          <div className="col">
            {this.renderWordCloud()}
          </div>
        </div>
      </>
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
