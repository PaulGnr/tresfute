import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Game from './components/game/Game'
import Home from './components/home/Home';
import CreateServer from './components/home/server/CreateServer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/create' component={CreateServer} />
          <Route path='/:id' component={Game} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
