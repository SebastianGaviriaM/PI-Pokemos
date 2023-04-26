import './App.css';
import Home from './components/HomePage/Home';
import Landing from './components/LandingPage/LandingPage';
import PokDetail from './components/pokDetail/pokDetail';
import Form from './components/Form/Form';
import NavBar from './components/navBar/navBar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Route exact path='/' >
        <Landing/>
      </Route>

      <Route path='/Home'>
        <NavBar/>
        <Home/>
      </Route>

      <Route path='/pokeDetail/:id'>
        <NavBar/>
        <PokDetail/>
      </Route>

      <Route path='/Form'>
        <NavBar/>
        <Form/>
      </Route> 
    </div>
  );
}

export default App;
