import React from 'react';
import './styles/App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Hebergement from './pages/Hebergement';
import Activites from './pages/Activites';
import Inscription from './pages/Inscription';

const App = () => {
  return (
    <main className="blocPage">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Hébergements" exact component={Hebergement} />
          <Route path="/activités" exact component={Activites} />
          <Route path="/inscription" exact component={Inscription} />
          <Route path="/reservia-react" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
