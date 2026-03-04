import { createContext, useContext, useState, ReactNode } from 'react';
import { User, users } from '../lib/mockDb';

interface AuthContextType {
  user: User | null;
  login: (email: string, password?: string) => User;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password?: string) => {
    // Check for test users
    if (email === '123@gmail.com' && password === '123') {
      const testStudent = users.find(u => u.email === '123@gmail.com');
      if (testStudent) {
        setUser(testStudent);
        return testStudent;
      }
    }
    
    if (email === '456@gmail.com' && password === '456') {
      const testEmployee = users.find(u => u.email === '456@gmail.com');
      if (testEmployee) {
        setUser(testEmployee);
        return testEmployee;
      }
    }

    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (foundUser) {
      setUser(foundUser);
      return foundUser;
    } else {
      throw new Error('Неверный email или пароль.');
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
