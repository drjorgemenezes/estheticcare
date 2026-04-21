import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Procedimento from './pages/Procedimento.tsx';
import Orientacoes from './pages/Orientacoes.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/procedimento/:id" element={<Procedimento />} />
        <Route path="/orientacoes" element={<Orientacoes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
