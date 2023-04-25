import './App.css';
import Home from './components/HomePage/Home';
import Landing from './components/LandingPage';
import PokDetail from './components/pokDetail';
import Form from './components/Form';
import NavBar from './components/navBar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Route path='/' >
        <NavBar/>
      </Route>

      <Route exact path='/' >
        <Landing/>
      </Route>

      <Route path='/Home'>

        <Home/>
      </Route>

      <Route path='/pokeDetail/:id' component={PokDetail}></Route>

      <Route path='/Form'>
        <Form/>
      </Route> 
    </div>
  );
}

export default App;
