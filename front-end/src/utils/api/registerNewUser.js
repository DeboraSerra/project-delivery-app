import axios from 'axios';
import { API_URL } from 'utils/api';

export const registerNewUser = async (user) => {
  const result = await axios.post(`${API_URL}/login/register`, user);
  return result;
};
