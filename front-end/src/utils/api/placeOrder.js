import axios from 'axios';
import { API_URL } from 'utils/api';

export const placeOrder = async (body, token) => {
  const { data } = await axios.post(`${API_URL}/sales`, body, {
    headers: {
      authorization: token,
    },
  });
  return data;
};
