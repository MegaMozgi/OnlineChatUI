import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';
import DirectPage from './pages/Direct/DirectPage';

function App() {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/direct' element={<DirectPage />}/>
      <Route path='/' element={<DirectPage />}/>
    </Routes>
  )
}

export default App;