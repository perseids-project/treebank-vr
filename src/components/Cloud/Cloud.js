import React from 'react';
import { shape, string } from 'prop-types';

const Cloud = ({ match: { params: { url } } }) => (
  <div>
    Url:
    {url}
  </div>
);

Cloud.propTypes = {
  match: shape({
    params: shape({
      url: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Cloud;
