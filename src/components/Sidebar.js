import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#111",
      color: "white",
      height: "100vh",
      padding: "20px"
    }}>

      <h2>Admin</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>

        <li>
          <Link to="/" style={{color:"white"}}>Dashboard</Link>
        </li>

        <li>
          <Link to="/users" style={{color:"white"}}>Users</Link>
        </li>

        <li>
          <Link to="/products" style={{color:"white"}}>Products</Link>
        </li>

        <li>
          <Link to="/login" style={{color:"white"}}>Login</Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;