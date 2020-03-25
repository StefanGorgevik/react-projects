import React from 'react';
import './App.css'
import FightList from './FightList/FightList'
import CardDraw from './CardDraw/CardDraw'
import AboutMe from './AboutMe/AboutMe'
import Home from './Home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainHeader from '../components/MainHeader/MainHeader';
import MemoryCard from './MemoryCard/MemoryCard';
import Stopwatch from './Stopwatch/Stopwatch'
import GuessIt from './GuessIt/GuessIt'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainHeader/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fight-list" component={FightList} />
          <Route exact path="/card-draw" component={CardDraw} />
          <Route exact path="/header" component={MainHeader} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/memory-card" component={MemoryCard} />
          <Route exact path="/stopwatch" component={Stopwatch} />
          <Route exact path="/guess-it" component={GuessIt} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
