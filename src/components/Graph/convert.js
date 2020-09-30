const convert = (text, id) => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, 'text/xml');
  const json = { nodes: [{ id: '0', val: '[ROOT]', group: '-' }], links: [] };

  const sentences = xml.evaluate('//sentence', xml, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);

  let sentence;
  while (sentence = sentences.iterateNext()) {
    if (sentence.getAttribute('id') === id) {
      const words = xml.evaluate('./word', sentence, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);

      let word;
      while (word = words.iterateNext()) {
        const id = word.getAttribute('id');
        const val = word.getAttribute('form');
        const group = (word.getAttribute('postag') || '-')[0];
        const head = word.getAttribute('head');

        json.nodes.push({ id, val, group });
        json.links.push({ source: head, target: id });
      }

      break;
    }
  }

  return json;
};

export default convert;
