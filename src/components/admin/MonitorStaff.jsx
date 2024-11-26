import React, { useEffect, useState } from 'react';

const MonitorStaff = () => {
  const [staffActivity, setStaffActivity] = useState([]);

  useEffect(() => {
    // Mock data; replace with a call to the backend to fetch staff activity
    setStaffActivity([
      { id: 1, name: 'John Doe', loginTime: '10:00 AM', logoutTime: '6:00 PM' },
      { id: 2, name: 'Jane Smith', loginTime: '9:30 AM', logoutTime: '5:30 PM' },
    ]);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Monitor Staff Activity</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="border px-6 py-3 text-left">Staff ID</th>
            <th className="border px-6 py-3 text-left">Name</th>
            <th className="border px-6 py-3 text-left">Login Time</th>
            <th className="border px-6 py-3 text-left">Logout Time</th>
          </tr>
        </thead>
        <tbody>
          {staffActivity.map((staff, index) => (
            <tr
              key={staff.id}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } hover:bg-gray-100 transition-colors`}
            >
              <td className="border px-6 py-3">{staff.id}</td>
              <td className="border px-6 py-3">{staff.name}</td>
              <td className="border px-6 py-3">{staff.loginTime}</td>
              <td className="border px-6 py-3">{staff.logoutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonitorStaff;
