import React, { useState } from 'react';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Rest of your dashboard content */}
    </div>
  );
};

export default Dashboard;