import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle, { Footer } from './styles/global';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <Footer>
        &copy; 2022 Developed By
        <a href="https://github.com/alisonsantosofc"> Alison Santos</a>
      </Footer>
      <GlobalStyle />
    </>
  );
};

export default App;
