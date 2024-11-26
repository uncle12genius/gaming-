import React, { useState } from 'react';
import sessionService from '../../services/sessionService';

const CreateSession = () => {
  const [sessionData, setSessionData] = useState({
    userId: '',
    startTime: '',
    endTime: '',
    paidAmount: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sessionService.createSession(sessionData);
      alert('Session created successfully');
    } catch (err) {
      alert('Error creating session: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={sessionData.userId}
        onChange={(e) => setSessionData({ ...sessionData, userId: e.target.value })}
      />
      <input
        type="datetime-local"
        placeholder="Start Time"
        value={sessionData.startTime}
        onChange={(e) => setSessionData({ ...sessionData, startTime: e.target.value })}
      />
      <input
        type="datetime-local"
        placeholder="End Time"
        value={sessionData.endTime}
        onChange={(e) => setSessionData({ ...sessionData, endTime: e.target.value })}
      />
      <input
        type="number"
        placeholder="Paid Amount"
        value={sessionData.paidAmount}
        onChange={(e) => setSessionData({ ...sessionData, paidAmount: e.target.value })}
      />
      <button type="submit">Create Session</button>
    </form>
  );
};

export default CreateSession;
