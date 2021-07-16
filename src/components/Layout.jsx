import React from 'react';

// Project Styles
import '@styles/App.scss';

import Header from './Header';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
