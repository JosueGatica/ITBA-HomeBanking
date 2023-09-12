import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Landing from './components/Landing';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/index" element={<Landing/>} />
    </Routes>
    </Router>

  );
}

export default App;
