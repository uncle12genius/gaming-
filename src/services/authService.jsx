import axios from '../utils/api';

const login = async (credentials) => {
  const { data } = await axios.post('/auth/login', credentials);
  localStorage.setItem('token', data.token);
  return data;
};

export default { login };
