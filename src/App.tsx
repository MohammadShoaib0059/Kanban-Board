
import './App.css';
import SelectorState from './Context/SelectorContext';
import AuthState from './Context/AuthContext';
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
