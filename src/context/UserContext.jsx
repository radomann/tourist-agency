import { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

export const UserContext = createContext(null);

const { Provider } = UserContext;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem('token')
      ? jwtDecode(localStorage.getItem('token'))
      : null
  );

  const handleUserLogin = token => {
    const userObject = jwtDecode(token);

    setUser(userObject);
    localStorage.setItem('token', token);
  };

  const handleUserLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <Provider value={{ user, handleUserLogin, handleUserLogout }}>
      {children}
    </Provider>
  );
};
