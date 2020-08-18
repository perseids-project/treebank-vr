import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

it('renders the homepage', () => {
  const component = (
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders a wordcloud', () => {
  const component = (
    <MemoryRouter initialEntries={['/https%3A%2F%2Fperseids-publications.github.io%2Fharrington-trees%2Fxml%2FCITE_TREEBANK_XML%2Fperseus%2Flattb%2F4362%2Flattb.4362.1.tb.xml']}>
      <App />
    </MemoryRouter>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders a wordcloud with an index', () => {
  const component = (
    <MemoryRouter initialEntries={['/https%3A%2F%2Fperseids-publications.github.io%2Fharrington-trees%2Fxml%2FCITE_TREEBANK_XML%2Fperseus%2Flattb%2F4362%2Flattb.4362.1.tb.xml/12']}>
      <App />
    </MemoryRouter>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
