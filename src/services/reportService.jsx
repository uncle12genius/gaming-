import axios from '../utils/api';

const getReports = async () => {
  const token = localStorage.getItem('token'); // Ensure token is being retrieved correctly

  if (!token) {
    throw new Error('No authorization token found');
  }

  const res = await axios.get('/reports', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  return res.data;
};

export default { getReports };
