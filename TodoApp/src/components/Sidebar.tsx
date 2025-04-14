import React from "react";

const Sidebar = () => {
  return (
    <div style={{ width: '200px', height: '100vh' , backgroundColor: 'white'}}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="/privatetask">Private Task </a></li>
        <li><a href="/professionaltask">Professional Task</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
