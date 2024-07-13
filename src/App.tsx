// src/App.tsx
import React, { useContext } from 'react';
import './App.css';
import SelectorState from './Context/SelectorContext';
import { Playground } from './Components/SideMenu/Sidemenu';
import AuthState, { AuthContext } from './Context/AuthContext';
import LoginPage from './Page/Auth/LoginPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import ProtectedRoutes from './Routes/ProtectedRoutes';


function App() {
  return (
    <SelectorState>
    <AuthState>    
    <ProtectedRoutes/>
    </AuthState>
    </SelectorState>
  );
}

export default App;
