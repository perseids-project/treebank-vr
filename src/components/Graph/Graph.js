import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { ForceGraphVR } from 'react-force-graph';
import SpriteText from 'three-spritetext';

import convert from './convert';

const nodeThreeObject = (node) => {
  const sprite = new SpriteText(node.val);
  sprite.color = node.color;
  sprite.textHeight = 8;

  return sprite;
};

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: null,
    };

    this.url = this.url.bind(this);
  }

  componentDidMount() {
    const { match: { params: { chunk } } } = this.props;

    fetch(this.url())
      .then((response) => response.text())
      .then((xml) => convert(xml.normalize('NFC'), chunk))
      .then((data) => {
        this.setState({
          isLoaded: true,
          data,
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

  render() {
    const { error, isLoaded, data } = this.state;

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
      <ForceGraphVR
        graphData={data}
        nodeAutoColorBy="group"
        dagMode="td"
        dagLevelDistance={45}
        nodeThreeObject={nodeThreeObject}
      />
    );
  }
}

Graph.propTypes = {
  match: shape({
    params: shape({
      url: string.isRequired,
      chunk: string,
    }).isRequired,
  }).isRequired,
};

export default Graph;
