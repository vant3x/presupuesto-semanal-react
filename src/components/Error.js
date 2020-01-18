import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => (
  <p className="alert alert-danger">{mensaje} <i className="far fa-sad-cry"></i></p>
);

Error.propTypes = {
  mensaje: PropTypes.string.isRequired
}

export default Error;