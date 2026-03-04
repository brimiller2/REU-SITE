import { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenLogin }: { onOpenLogin: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Абитуриенту', href: '/abiturient' },
    { name: 'Выпускнику', href: '/alumni' },
    { name: 'Наука', href: '/science' },
    { name: 'Об университете', href: '/about' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isTransparent ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-800 transition-colors">
              П
            </div>
            <div className={`font-bold leading-tight transition-colors ${!isTransparent ? 'text-slate-900' : 'text-white'}`}>
              <span className="block text-lg">РЭУ им. Г.В. Плеханова</span>
              <span className="block text-xs opacity-80 font-normal">Первый экономический</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  !isTransparent ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {user && (
              <Link
                to={user.role === 'student' ? '/student' : '/employee'}
                className={`text-sm font-bold transition-colors hover:text-blue-600 ${
                  !isTransparent ? 'text-blue-600' : 'text-white'
                }`}
              >
                Мой кабинет
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`p-2 rounded-full transition-colors hover:bg-black/5 ${!isTransparent ? 'text-slate-700' : 'text-white'}`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-full transition-colors hover:bg-black/5 ${!isTransparent ? 'text-slate-700' : 'text-white'}`}>
              <Globe className="w-5 h-5" />
            </button>
            
            {user ? (
              <div className="flex items-center gap-3">
                <div className={`text-sm font-medium ${!isTransparent ? 'text-slate-700' : 'text-white'}`}>
                  {user.name.split(' ')[1]} {user.name.split(' ')[0]}
                </div>
                <button 
                  onClick={handleLogout}
                  className={`p-2 rounded-full transition-colors hover:bg-red-500 hover:text-white ${!isTransparent ? 'text-slate-700 bg-slate-100' : 'text-white bg-white/20'}`}
                  title="Выйти"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button 
                onClick={onOpenLogin}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  !isTransparent 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Войти</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 ${!isTransparent ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
                >
                  {link.name}
                </Link>
              ))}
              {user && (
                <Link
                  to={user.role === 'student' ? '/student' : '/employee'}
                  className="text-lg font-bold text-blue-600 py-2 border-b border-slate-50"
                >
                  Мой кабинет
                </Link>
              )}
              <div className="flex items-center gap-4 pt-4">
                {user ? (
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl font-medium"
                  >
                    <LogOut className="w-5 h-5" />
                    Выйти
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLogin();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium"
                  >
                    <User className="w-5 h-5" />
                    Личный кабинет
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
