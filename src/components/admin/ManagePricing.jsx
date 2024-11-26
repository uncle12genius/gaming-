import React, { useState } from 'react';

const ManagePricing = () => {
  const [pricePerHour, setPricePerHour] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pricing updated to KES ${pricePerHour} per hour`);
    // You can add logic to send the updated pricing to the backend
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Pricing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Price Per Hour (KES):
          </label>
          <input
            type="number"
            value={pricePerHour}
            onChange={(e) => setPricePerHour(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Pricing
        </button>
      </form>
    </div>
  );
};

export default ManagePricing;
