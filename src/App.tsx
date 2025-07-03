// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes'; // Assumindo que você tem um AppRoutes para definir as rotas
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}