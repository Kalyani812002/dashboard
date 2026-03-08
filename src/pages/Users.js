function Users() {

  const users = [
    { id: 1, name: "Kalyani", email: "kalyani@gmail.com" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com" },
    { id: 3, name: "Amit", email: "amit@gmail.com" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Users;