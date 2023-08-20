import './App.css';
import Boton from './components/boton';
import Contador from './components/contador';
import logoContadorClic from './images/logo-contador-clic.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='contador-logo-contenedor'>
        <img className='contador-logo' src={logoContadorClic} alt='logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto='clic' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
};

export default App;
