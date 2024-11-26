import axios from '../utils/api';

const createSession = async (data) => {
  const res = await axios.post('/sessions', data);
  return res.data;
};

const getSessions = async () => {
  const res = await axios.get('/sessions');
  return res.data;
};

export default { createSession, getSessions };
