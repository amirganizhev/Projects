import { useState } from 'react';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './styles/App.css';

function App() {

  const[loaderActive, setLoaderActive] = useState(true);

  window.onload = function() {
    setTimeout(() => {
      setLoaderActive(false);
    }, 6500);
  }

  return (
    <>
      {loaderActive === true ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;