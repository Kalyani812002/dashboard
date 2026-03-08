import Chart from "../components/Chart";
import Widget from "../components/Widget";

function Dashboard() {

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Widget title="Users" value="120" />
        <Widget title="Products" value="80" />
        <Widget title="Orders" value="30" />
      </div>

      <Chart />

    </div>
  );
}

export default Dashboard;