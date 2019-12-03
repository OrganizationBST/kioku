import React from 'react';
import AppNavbar from './components/AppNavbar';
import DeckList from './components/DeckList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <DeckList />
    </div>
  );
}

export default App;
