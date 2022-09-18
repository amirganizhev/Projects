import React from 'react';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './styles/App.css';

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;