import React from 'react';
import { renderRoutes } from 'react-router-config';

// Render matched routes.
const App = ({ route }) => {
  return (
    <div>
      <div>Header component</div>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App
};
