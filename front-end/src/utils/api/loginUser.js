import axios from 'axios';
import { API_URL } from 'utils/api';

export const loginUser = async (user) => {
  const result = await axios.post(`${API_URL}/login`, user);
  return result;
};
