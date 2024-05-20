import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import { AnimatePresence } from "framer-motion"
import Login from './Pages/Login'
import Register from './Pages/Register'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/init'
import ProtectedRoute from './Pages/ProtectedRoute'
import DashboardMain from './Pages/Dashboard'
import AddNewPortfolio from './Pages/Portfolio/AddNew'
import DashboardPortfolio from './Pages/DashboardPortfolio'

function App() {

  const location = useLocation()
  const [user] = useAuthState(auth)

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardMain />
              </ProtectedRoute>
            }
          />
          <Route path="/dashboard/portfolio" element={<ProtectedRoute><DashboardPortfolio /></ProtectedRoute>} />
          <Route path="/dashboard/portfolio/add" element={<ProtectedRoute><AddNewPortfolio /></ProtectedRoute>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
