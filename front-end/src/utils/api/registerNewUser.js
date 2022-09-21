import axios from 'axios';
import { API_URL } from 'utils/api';

export const registerNewUser = async (user) => {
  const { data } = await axios.post(`${API_URL}/login/register`, user);
  return data;
};
