import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
      localStorage.setItem('@rocketmovies:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível fazer login.');
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user');
    const token = localStorage.getItem('@rocketmovies:token');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    setData({
      token,
      user: JSON.parse(user),
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )

}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };