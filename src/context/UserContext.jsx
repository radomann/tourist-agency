import { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import {authService} from '../service/auth'
import {touristServices} from '../service/tourist'

export const UserContext = createContext(null);

const { Provider } = UserContext;
const { getUserDetail } = touristServices;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem('token')
      ? jwtDecode(localStorage.getItem('token'))
      : null
  );

  const [userdetail, setUserdetail] = useState([]);
  
  const handleUserLogin = token => {
    const userObject = jwtDecode(token);

    setUser(userObject);
    localStorage.setItem('token', token);
    userDetail()
  };

  const handleUserLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setUserdetail(null);
  };

  const userDetail = async () => {
    try {
        const response = await getUserDetail();
        setUserdetail(response.data)
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
};

useEffect(() => {
  if(localStorage.getItem('token') !== null)userDetail()

  // console.log(localStorage.getItem('token'));
}, [])

  return (
    <Provider value={{ user, userdetail, handleUserLogin, handleUserLogout }}>
      {children}
    </Provider>
  );
};
