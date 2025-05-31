import React from 'react';
import { Route,Routes } from 'react-router-dom';
import {Header} from './components/Header';
import {Counter} from './components/Counter';
import {Footer} from './components/Footer';
import {PageNotFound} from './components/PageNotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
