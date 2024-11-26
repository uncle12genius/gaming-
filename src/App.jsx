import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import RegisterStaff from './components/admin/RegisterStaff';
import ManagePricing from './components/admin/ManagePricing';
import MonitorStaff from './components/admin/MonitorStaff';
import StaffDashboard from './components/staff/StaffDashboard';
import CreateSession from './components/staff/CreateSession';
import PrivateRoute from './components/common/PrivateRoute';
import Login from './components/auth/Login';
import AuthProvider from './context/AuthContext';
import Reports from './components/admin/Reports';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Redirect root (/) to login page */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute role="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/register-staff"
            element={
              <PrivateRoute role="admin">
                <RegisterStaff />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/manage-pricing"
            element={
              <PrivateRoute role="admin">
                <ManagePricing />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/monitor-staff"
            element={
              <PrivateRoute role="admin">
                <MonitorStaff />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/reports"  
            element={
              <PrivateRoute role="admin">
                <Reports />  
              </PrivateRoute>
            }
          />

          {/* Staff Routes */}
          <Route
            path="/staff/dashboard"
            element={
              <PrivateRoute role="staff">
                <StaffDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/staff/create-session"
            element={
              <PrivateRoute role="staff">
                <CreateSession />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
