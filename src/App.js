import React from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Categories from './components/Categories';
import Live from './components/Live';
import LifeSports from './components/LifeSports';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <Categories/>
      <Live/>
      <LifeSports/>
      <Footer/>
     </div>
  );
}

export default App;
