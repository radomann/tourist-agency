import { registerBackend } from './api';

class AuthService {
  postRegisterData = async data => await registerBackend.post('/register/', data);
  
  getLoggedInUser = async data => await registerBackend.post('/api/token/', data);
}



export const authService = new AuthService();
