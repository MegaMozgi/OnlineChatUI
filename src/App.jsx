import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';

function App() {

  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/' element={<RegisterPage/>}/>
    </Routes>
  )
}

export default App;