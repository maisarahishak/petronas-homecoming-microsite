import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Leaderboard from './components/Leaderboard/Leaderboard';
import UserGuide from './components/UserGuide/UserGuide';
import ChallengeDetails from './components/ChallengeDetails/ChallengeDetails';
import CompatibleDevices from './components/CompatibleDevices/CompatibleDevices';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header id="header" />
      <ChallengeDetails id="challenge-details" />
      <Leaderboard id="leaderboard" />
      <UserGuide id="user-guide" />
      <CompatibleDevices id="compatible-devices-apps" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
