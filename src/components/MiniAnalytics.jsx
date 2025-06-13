import React, { useEffect, useState } from 'react';

export default function MiniAnalytics() {
  const [visitCount, setVisitCount] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    // Visit counter using localStorage
    const visits = parseInt(localStorage.getItem('visitCount') || '0') + 1;
    localStorage.setItem('visitCount', visits);
    setVisitCount(visits);

    // Time tracking
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTimeSpent(elapsed);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 text-xs bg-black/70 text-white rounded-md p-3 shadow-lg backdrop-blur">
      <p>👀 Visits: <strong>{visitCount}</strong></p>
      <p>⏱ Time on page: <strong>{timeSpent}</strong>s</p>
    </div>
  );
}
