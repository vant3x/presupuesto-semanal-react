import React from 'react';

const Error = ({mensaje}) => (
  <p className="alert alert-danger">{mensaje} <i className="far fa-sad-cry"></i></p>
);

export default Error;