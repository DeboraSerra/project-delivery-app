import axios from 'axios';
import { API_URL } from 'utils/api';

export const loginUser = async (user) => {
  const { data } = await axios.post(`${API_URL}/login`, user);
  return data.user;
};
