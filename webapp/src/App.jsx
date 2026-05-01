import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Proyectos from './pages/Proyectos';
import Preguntas from './pages/Preguntas';
import Cotizacion from './pages/Cotizacion';
import Servicios from './pages/Servicios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="preguntas" element={<Preguntas />} />
          <Route path="cotizacion" element={<Cotizacion />} />
          <Route path="servicios" element={<Servicios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
