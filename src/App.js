import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import ChallengeDetails from './components/ChallengeDetails/ChallengeDetails';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <ChallengeDetails />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
