import React from 'react';
import { shape, string } from 'prop-types';

import { ForceGraphVR } from 'react-force-graph';
import SpriteText from 'three-spritetext';

const data = {
  nodes: [
    {
      id: '1~~0',
      val: '[ROOT]',
      group: '.',
    },
    {
      id: '1~~1',
      val: 'Ἡροδότου',
      group: 'n',
    },
    {
      id: '1~~2',
      val: 'Ἁλικαρνησσέος',
      group: 'n',
    },
    {
      id: '1~~3',
      val: 'ἱστορίης',
      group: 'n',
    },
    {
      id: '1~~4',
      val: 'ἀπόδεξις',
      group: 'n',
    },
    {
      id: '1~~5',
      val: 'ἥδε',
      group: 'p',
    },
    {
      id: '1~~6',
      val: ',',
      group: 'u',
    },
    {
      id: '1~~7',
      val: 'ὡς',
      group: 'c',
    },
    {
      id: '1~~8',
      val: 'μή',
      group: 'd',
    },
    {
      id: '1~~9',
      val: '-τε',
      group: 'd',
    },
    {
      id: '1~~10',
      val: 'τὰ',
      group: 'l',
    },
    {
      id: '1~~11',
      val: 'γενόμενα',
      group: 'v',
    },
    {
      id: '1~~12',
      val: 'ἐξ',
      group: 'r',
    },
    {
      id: '1~~13',
      val: 'ἀνθρώπων',
      group: 'n',
    },
    {
      id: '1~~14',
      val: 'τῷ',
      group: 'l',
    },
    {
      id: '1~~15',
      val: 'χρόνῳ',
      group: 'n',
    },
    {
      id: '1~~16',
      val: 'ἐξίτηλα',
      group: 'a',
    },
    {
      id: '1~~17',
      val: 'γένηται',
      group: 'v',
    },
    {
      id: '1~~18',
      val: ',',
      group: 'u',
    },
    {
      id: '1~~19',
      val: 'μή',
      group: 'd',
    },
    {
      id: '1~~20',
      val: '-τε',
      group: 'c',
    },
    {
      id: '1~~21',
      val: 'ἔργα',
      group: 'n',
    },
    {
      id: '1~~22',
      val: 'μεγάλα',
      group: 'a',
    },
    {
      id: '1~~23',
      val: 'τε',
      group: 'd',
    },
    {
      id: '1~~24',
      val: 'καὶ',
      group: 'c',
    },
    {
      id: '1~~25',
      val: 'θωμαστά',
      group: 'a',
    },
    {
      id: '1~~26',
      val: ',',
      group: 'u',
    },
    {
      id: '1~~27',
      val: 'τὰ',
      group: 'l',
    },
    {
      id: '1~~28',
      val: 'μὲν',
      group: 'd',
    },
    {
      id: '1~~29',
      val: 'Ἕλλησι',
      group: 'n',
    },
    {
      id: '1~~30',
      val: 'τὰ',
      group: 'l',
    },
    {
      id: '1~~31',
      val: 'δὲ',
      group: 'c',
    },
    {
      id: '1~~32',
      val: 'βαρβάροισι',
      group: 'n',
    },
    {
      id: '1~~33',
      val: 'ἀποδεχθέντα',
      group: 'v',
    },
    {
      id: '1~~34',
      val: ',',
      group: 'u',
    },
    {
      id: '1~~35',
      val: 'ἀκλεᾶ',
      group: 'a',
    },
    {
      id: '1~~36',
      val: 'γένηται',
      group: 'v',
    },
    {
      id: '1~~37',
      val: ',',
      group: 'u',
    },
    {
      id: '1~~38',
      val: 'τά',
      group: 'l',
    },
    {
      id: '1~~39',
      val: 'τε',
      group: 'd',
    },
    {
      id: '1~~40',
      val: 'ἄλλα',
      group: 'a',
    },
    {
      id: '1~~41',
      val: 'καὶ',
      group: 'c',
    },
    {
      id: '1~~42',
      val: 'δι᾽',
      group: 'r',
    },
    {
      id: '1~~43',
      val: 'ἣν',
      group: 'a',
    },
    {
      id: '1~~44',
      val: 'αἰτίην',
      group: 'n',
    },
    {
      id: '1~~45',
      val: 'ἐπολέμησαν',
      group: 'v',
    },
    {
      id: '1~~46',
      val: 'ἀλλήλοισι',
      group: 'p',
    },
    {
      id: '1~~47',
      val: '.',
      group: 'u',
    },
    {
      id: '1~~48',
      val: 'ἐστιν',
      group: 'v',
    },
    {
      id: '1~~49',
      val: 'ἀποδεχθέντα',
      group: 'v',
    },
  ],
  links: [
    {
      source: '1~~3',
      target: '1~~1',
    },
    {
      source: '1~~1',
      target: '1~~2',
    },
    {
      source: '1~~4',
      target: '1~~3',
    },
    {
      source: '1~~48',
      target: '1~~4',
    },
    {
      source: '1~~48',
      target: '1~~5',
    },
    {
      source: '1~~0',
      target: '1~~6',
    },
    {
      source: '1~~48',
      target: '1~~7',
    },
    {
      source: '1~~17',
      target: '1~~8',
    },
    {
      source: '1~~20',
      target: '1~~9',
    },
    {
      source: '1~~11',
      target: '1~~10',
    },
    {
      source: '1~~17',
      target: '1~~11',
    },
    {
      source: '1~~11',
      target: '1~~12',
    },
    {
      source: '1~~12',
      target: '1~~13',
    },
    {
      source: '1~~15',
      target: '1~~14',
    },
    {
      source: '1~~17',
      target: '1~~15',
    },
    {
      source: '1~~17',
      target: '1~~16',
    },
    {
      source: '1~~20',
      target: '1~~17',
    },
    {
      source: '1~~0',
      target: '1~~18',
    },
    {
      source: '1~~36',
      target: '1~~19',
    },
    {
      source: '1~~7',
      target: '1~~20',
    },
    {
      source: '1~~36',
      target: '1~~21',
    },
    {
      source: '1~~24',
      target: '1~~22',
    },
    {
      source: '1~~24',
      target: '1~~23',
    },
    {
      source: '1~~21',
      target: '1~~24',
    },
    {
      source: '1~~24',
      target: '1~~25',
    },
    {
      source: '1~~0',
      target: '1~~26',
    },
    {
      source: '1~~21',
      target: '1~~27',
    },
    {
      source: '1~~31',
      target: '1~~28',
    },
    {
      source: '1~~49',
      target: '1~~29',
    },
    {
      source: '1~~21',
      target: '1~~30',
    },
    {
      source: '1~~21',
      target: '1~~31',
    },
    {
      source: '1~~33',
      target: '1~~32',
    },
    {
      source: '1~~31',
      target: '1~~33',
    },
    {
      source: '1~~0',
      target: '1~~34',
    },
    {
      source: '1~~36',
      target: '1~~35',
    },
    {
      source: '1~~20',
      target: '1~~36',
    },
    {
      source: '1~~0',
      target: '1~~37',
    },
    {
      source: '1~~40',
      target: '1~~38',
    },
    {
      source: '1~~41',
      target: '1~~39',
    },
    {
      source: '1~~41',
      target: '1~~40',
    },
    {
      source: '1~~36',
      target: '1~~41',
    },
    {
      source: '1~~45',
      target: '1~~42',
    },
    {
      source: '1~~44',
      target: '1~~43',
    },
    {
      source: '1~~42',
      target: '1~~44',
    },
    {
      source: '1~~41',
      target: '1~~45',
    },
    {
      source: '1~~45',
      target: '1~~46',
    },
    {
      source: '1~~0',
      target: '1~~47',
    },
    {
      source: '1~~0',
      target: '1~~48',
    },
    {
      source: '1~~31',
      target: '1~~49',
    },
  ],
};

const fromBase64 = (string) => Buffer.from(string, 'base64').toString();

const nodeThreeObject = (node) => {
  const sprite = new SpriteText(node.val);
  sprite.color = node.color;
  sprite.textHeight = 8;

  return sprite;
};

const Graph = ({ match: { params: { url, chunk } } }) => {
  const convertedUrl = fromBase64(url);

  return (
    <ForceGraphVR
      graphData={data}
      nodeAutoColorBy="group"
      dagMode="td"
      dagLevelDistance={45}
      nodeThreeObject={nodeThreeObject}
    />
  );
};

Graph.propTypes = {
  match: shape({
    params: shape({
      url: string.isRequired,
      chunk: string,
    }).isRequired,
  }).isRequired,
};

export default Graph;
