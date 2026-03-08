function Login() {

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>

      <div style={{
        background:"white",
        padding:"40px",
        boxShadow:"0 0 10px gray"
      }}>

        <h2>Admin Login</h2>

        <input type="text" placeholder="Username" /><br/><br/>
        <input type="password" placeholder="Password" /><br/><br/>

        <button>Login</button>

      </div>

    </div>
  );

}

export default Login;