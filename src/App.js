import React from 'react';
import AppNavbar from './components/AppNavbar';
import DeckList from './components/DeckList';
import DeckModal from './components/DeckModal';
import { Container } from 'reactstrap';
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
