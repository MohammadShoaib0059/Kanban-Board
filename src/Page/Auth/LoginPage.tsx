
import React, { useContext, useState } from 'react';
import { Container } from '@mui/material';
import { AuthContext } from '../../Context/AuthContext';
import LoginComponent from '../../Components/Auth/Auth';


const LoginPage: React.FC = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Auth Component must be used within a AuthContext.Provider');
  }

  const [isAdminView, setIsAdminView] = useState(false);

  const toggleView = () => {
    setIsAdminView(!isAdminView);
  };

  return (
    <Container component="main" maxWidth="lg">
      <LoginComponent isAdminView={isAdminView} toggleView={toggleView} />
    </Container>
  );
};

export default LoginPage;
