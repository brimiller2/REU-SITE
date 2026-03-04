import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Abiturient from './pages/Abiturient';
import Student from './pages/Student';
import Employee from './pages/Employee';
import Alumni from './pages/Alumni';
import Science from './pages/Science';
import About from './pages/About';
import AllFaculties from './pages/AllFaculties';
import AllNews from './pages/AllNews';
import LoginModal from './components/LoginModal';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
          <Navbar onOpenLogin={() => setIsLoginOpen(true)} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/abiturient" element={<Abiturient />} />
              <Route 
                path="/student" 
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <Student />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/employee" 
                element={
                  <ProtectedRoute allowedRoles={['employee']}>
                    <Employee />
                  </ProtectedRoute>
                } 
              />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/science" element={<Science />} />
              <Route path="/about" element={<About />} />
              <Route path="/faculties" element={<AllFaculties />} />
              <Route path="/news" element={<AllNews />} />
            </Routes>
          </main>
          <Footer />
          <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
      </Router>
    </AuthProvider>
  );
}
