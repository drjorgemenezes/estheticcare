import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import Procedimento from './pages/Procedimento.tsx';
import Orientacoes from './pages/Orientacoes.tsx';
import Biografia from './pages/Biografia.tsx';
import PosPerdaPonderal from './pages/PosPerdaPonderal.tsx';
import Localizacao from './pages/Localizacao.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/procedimento/:id" element={<Procedimento />} />
          <Route path="/orientacoes" element={<Orientacoes />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/pos-perda-ponderal" element={<PosPerdaPonderal />} />
          <Route path="/localizacao" element={<Localizacao />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
