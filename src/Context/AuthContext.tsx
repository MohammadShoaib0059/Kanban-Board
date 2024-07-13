import React, { createContext, ReactNode } from 'react';
import { AuthContextType, LoginsParams } from '../Common/Common';
import { setCredentials,Loginkanban, Logoutkanban, setIsLoggedIn ,useDispatch, useMemo, useState} from '../Common/imports';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthStateProps {
  children: ReactNode;
}

const AuthState: React.FC<AuthStateProps> = ({ children }) => {
 const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const token = localStorage.getItem("token");
  const handleSubmit = (values: LoginsParams) => {
    // dispatch(setCredentials(values));
    dispatch(setCredentials(values.username)); 
    dispatch(Loginkanban(values));
    localStorage.setItem('credential',values.username)
    // setIsAuthenticated(true);
  };
  const handlelogout = async () => {
    localStorage.removeItem('credential')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    dispatch(Logoutkanban())
    dispatch(setIsLoggedIn(false))
    // setIsAuthenticated(false);
  }

  const memoedValue: AuthContextType = useMemo(
    () => ({
      handleSubmit,
      handlelogout,
      isAuthenticated,
    }),
    [handleSubmit,handlelogout, isAuthenticated]
  );

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
};

export default AuthState;
