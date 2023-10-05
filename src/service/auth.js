import { registerBackend, sendToken, getDetail } from './api';

class AuthService {
  postRegisterData = async data => await registerBackend.post('/register/', data);
  
  getLoggedInUser = async data => await registerBackend.post('/api/token/', data);
  
  putUserData = async (data, token) => await registerBackend.put('/api/user/profile/', data, { headers: {'Authorization': 'Bearer ' + token}});

  getUserDetail = async data => await sendToken.get('/api/user/profile/',{ headers: {'Authorization': 'Bearer ' + data}});

}



export const authService = new AuthService();
