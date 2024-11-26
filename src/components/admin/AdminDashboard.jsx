import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Register Staff */}
        <Link
          to="/admin/register-staff"
          className="p-6 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Register Staff</h2>
          <p className="text-sm opacity-90">Add new staff members to the system</p>
        </Link>

        {/* View Reports */}
        <Link
          to="/admin/reports"
          className="p-6 bg-green-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">View Reports</h2>
          <p className="text-sm opacity-90">Access detailed activity reports</p>
        </Link>

        {/* Manage Pricing */}
        <Link
          to="/admin/manage-pricing"
          className="p-6 bg-yellow-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Pricing</h2>
          <p className="text-sm opacity-90">Update pricing for services</p>
        </Link>

        {/* Monitor Staff Activity */}
        <Link
          to="/admin/monitor-staff"
          className="p-6 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          <h2 className="text-xl font-semibold mb-2">Monitor Staff Activity</h2>
          <p className="text-sm opacity-90">Track staff logins and activity</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
