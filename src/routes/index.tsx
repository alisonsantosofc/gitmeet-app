import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const MainRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />;
      <Route path="/repository" element={<Repository />} />;
    </Routes>
  );
};

export default MainRoutes;
