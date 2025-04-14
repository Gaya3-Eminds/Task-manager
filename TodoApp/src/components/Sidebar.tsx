import React from "react";

const Sidebar = () => {
  return (
    <div style={{ width: '200px', height: '100vh' , backgroundColor: 'white'}}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href=''>Dashboard</a></li>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
