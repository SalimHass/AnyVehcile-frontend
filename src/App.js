import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import SignUp from './features/signUp/SignUp'

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
         
        </Route>

      </Route>
    </Routes>
  )
}

export default App;