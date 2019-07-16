import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome, faCopy, faTrashAlt, faDownload, faSlidersH, faQuestionCircle,
  faCog, faPowerOff, faSave
} from '@fortawesome/free-solid-svg-icons';
// import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Toolbar from './components/toolbar/Toolbar';
import Planner from './pages/Planner';

library.add(faHome, faCopy, faTrashAlt, faDownload, faSlidersH, faQuestionCircle,
  faCog, faPowerOff, faSave);

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Planner/>
          
        </div>
        
      </Router>
    )
  }
}

export default App;

