import React from 'react';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';

import './styles/App.css';

function App() {
  return (
    <>
      <Loader />
      <Navbar />
    </>
  );
}

export default App;