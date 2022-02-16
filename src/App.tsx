import { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Infos from './components/Infos';
import Simulator from './components/Simulator';
import Plans from './components/Plans';

class App extends Component {
  render() {
    return (
      <div className="flex flex-col w-full min-h-screen p-0 m-0 App bg-primary">
        <Header />
        <Infos />
        <Simulator />
        <Plans />
      </div>
    );
  }
}

export default App;
