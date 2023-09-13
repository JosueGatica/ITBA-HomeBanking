import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Landing from './components/Landing';
import FAQPage from './components/FAQPage';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/index" element={<Landing/>} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
    </Router>

  );
}

export default App;
