import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Landing from './components/Landing/Landing';
import FAQPage from './components/FAQ/FAQPage';
import Cuentas from './components/Cuenta/Cuentas';
import Transferencia from './components/transferencia/Transferencia';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/transferencia" element={<Transferencia/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cuenta" element={<Cuentas/>} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
    </Router>

  );
}

export default App;
