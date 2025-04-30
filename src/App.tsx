import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}