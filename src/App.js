import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);
  
  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
    console.log("click");
  }

  const reiniciarContador = () =>{
    setNumClicks(0);
    console.log("Reiniciar");
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freecodecamplogo}
        alt='logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
