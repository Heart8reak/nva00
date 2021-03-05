import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'


function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
      <h1>Hola Mundo</h1>
    </>
  );
}

export default App;
