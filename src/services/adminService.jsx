import axios from '../utils/api';

const registerStaff = async (data) => {
  const res = await axios.post('/admin/register-staff', data);
  return res.data;
};

export default { registerStaff };
