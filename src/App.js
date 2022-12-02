import logo from './logo.svg';
import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freecodecamplogo}
        alt='logo de freecodecamp' />

      </div>
    </div>
  );
}

export default App;
