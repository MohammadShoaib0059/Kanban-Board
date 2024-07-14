import React, { createContext, ReactNode } from 'react';
import { AuthContextType, LoginsParams } from '../Common/Common';
import { setCredentials,Loginkanban, Logoutkanban, setIsLoggedIn ,useDispatch, useMemo} from '../Common/imports';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthStateProps {
  children: ReactNode;
}

const AuthState: React.FC<AuthStateProps> = ({ children }) => {
 const dispatch = useDispatch();
// const token = localStorage.getItem("token");
  const handleSubmit = (values: LoginsParams) => {
    dispatch(setCredentials(values.username)); 
    dispatch(Loginkanban(values) as any);
    localStorage.setItem('credential',values.username)
  };
  const handlelogout = async () => {
    localStorage.removeItem('credential')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    dispatch(Logoutkanban() as any)
    dispatch(setIsLoggedIn(false))
  }

  const memoedValue: AuthContextType = useMemo(
    () => ({
      handleSubmit,
      handlelogout,
    }),
    [handleSubmit,handlelogout]
  );

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
};

export default AuthState;
