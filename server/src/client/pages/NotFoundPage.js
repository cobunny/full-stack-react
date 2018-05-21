import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="center-align">
      <h3>Ooops!</h3>
      <p>Page not found!</p>
    </div>
  );
};

export default {
  component: NotFoundPage
};
