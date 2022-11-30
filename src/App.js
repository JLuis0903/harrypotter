import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';
import ListaBook from './components/ListaBook';

function App() {
  return (
    <div className="App">
      <Titulo title = 'API Harry Potter'/>
      <div className="container">
        <ListaBook/>
      </div>
    </div>
  );
}

export default App;
