import React from 'react';
import { Link } from 'react-router-dom';

const StaffDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Staff Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Link to Create Session */}
        <Link
          to="/staff/create-session"
          className="p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Create Session
        </Link>

        {/* Link to View Notifications */}
        <Link
          to="/staff/notifications"
          className="p-4 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          Send Notifications
        </Link>

        {/* Link to Manage Sessions */}
        <Link
          to="/staff/manage-sessions"
          className="p-4 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
        >
          Manage Sessions
        </Link>
      </div>
    </div>
  );
};

export default StaffDashboard;
