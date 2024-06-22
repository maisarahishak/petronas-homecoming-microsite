import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import UserGuide from './components/UserGuide/UserGuide';
import ChallengeDetails from './components/ChallengeDetails/ChallengeDetails';
import CompatibleDevices from './components/CompatibleDevices/CompatibleDevices';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <ChallengeDetails />
      <UserGuide />
      <CompatibleDevices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
