import React, { useEffect, useState } from 'react';
import reportService from '../../services/reportService';

const Reports = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await reportService.getReports();
        setReportData(data);
      } catch (err) {
        alert('Error fetching reports: ' + err.message);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Reports</h1>
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-4 text-sm font-medium text-gray-600">Session ID</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600">User ID</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600">Start Time</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600">End Time</th>
              <th className="px-6 py-4 text-sm font-medium text-gray-600">Paid Amount</th>
            </tr>
          </thead>
          <tbody>
            {reportData.length > 0 ? (
              reportData.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">{report.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.userId}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.startTime}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.endTime}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{report.paidAmount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No reports available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
