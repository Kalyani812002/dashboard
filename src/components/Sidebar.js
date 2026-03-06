import React from "react";

function Sidebar() {
  return (
    <div style={{width:"200px", background:"#222", color:"white", height:"100vh"}}>
      <h2>Admin</h2>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Products</li>
        <li>Reports</li>
      </ul>
    </div>
  );
}

export default Sidebar;