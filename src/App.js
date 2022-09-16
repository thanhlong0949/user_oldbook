import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/navigation';
import Home from './components/common/Home';
import Login from './pages/Auth/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} />
      <Route path='/HomePage' element={<HomePage />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
