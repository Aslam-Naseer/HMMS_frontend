import './App.css';
import Login from './modules/Login';
import Register from './modules/Reg'; 
import Dashboard from './modules/Dashboard'; 
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';



function App() {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/reg" element={<Register/>} />
          <Route path="/home" element={<Dashboard/>}/>
          
        </Routes>
      
    </Router>
  );
}

export default App;
