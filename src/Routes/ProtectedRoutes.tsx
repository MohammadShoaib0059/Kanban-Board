import { useContext } from 'react'
import {
    Routes,
    Route,
    BrowserRouter as Router,
    Navigate,
  } from "react-router-dom";
import LoginPage from '../Page/Auth/LoginPage';
import { Playground } from '../Components/SideMenu/Sidemenu';
import { SelectorContext } from '../Context/SelectorContext';
const ProtectedRoutes = () => {
    const context = useContext(SelectorContext);

    if (!context) {
      throw new Error('ProtectedRoute must be used within a AuthContext.Provider');
    }
  
    const { isLoggedIn } = context;
    console.log("isLoggedIn",isLoggedIn);
    
  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ?  <Playground /> : <Navigate to="/login" replace />
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </>
  )
}

export default ProtectedRoutes
