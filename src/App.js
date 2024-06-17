import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import ChallengeDetails from './components/ChallengeDetails/ChallengeDetails';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <ChallengeDetails />
    </div>
  );
}

export default App;
