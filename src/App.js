import './App.css';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import $ from 'jquery';
import Popper from 'popper.js';
import Menu from './components/Menu'



function App() {
  return (
    <div className="App">
      <Menu/>
      <Router/>
    </div>
  );
}

export default App;
