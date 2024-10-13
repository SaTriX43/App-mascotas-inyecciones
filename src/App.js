import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Encabezado from './componentes/Encabezado';
import Principal from './componentes/Principal/Principal';
import { TamanioPantallaProvider } from './context/TamanioPantalla';
import Mascotas from './componentes/Mascotas/Mascotas';
import { InfoMascotasProvider } from './context/InfoMascotas';
import Vacunacion from './componentes/vacunacion/Vacunacion';
import { VacunacionMascotaProvider } from './context/VacunacionMascotas.js';
import Recordatorio from './componentes/Recordatorio/Recordatorio.js';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <TamanioPantallaProvider>
      <InfoMascotasProvider>
      <VacunacionMascotaProvider>
        <Encabezado/>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/mascotas' element={<Mascotas/>}/>
          <Route path='/vacunacion' element={<Vacunacion/>}/>
          <Route path='/recordatorio' element={<Recordatorio/>}/>
        </Routes>
      </VacunacionMascotaProvider>
      </InfoMascotasProvider>
      </TamanioPantallaProvider>
    </div>
    </HashRouter>
  );
}

export default App;
