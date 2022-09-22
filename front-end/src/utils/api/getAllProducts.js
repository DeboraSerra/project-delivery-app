import axios from 'axios';
import { API_URL } from './apiUrl';

export const getAllProducts = async (token) => {
  const { data } = await axios.get(`${API_URL}/products`, {
    headers: {
      authorization: token,
    },
  });
  return data;
};
