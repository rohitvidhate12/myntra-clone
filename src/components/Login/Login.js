const Login = () => {
  return (
    <>
      <div className="login-container">
        <p>
          <strong>Login</strong> or <strong>Signup</strong>{" "}
        </p>
        <div className="box">
          <input
            className="input-box"
            type="text"
            placeholder="Enter your email"
          />{" "}
          <br />
          <input
            className="input-box"
            type="text"
            placeholder="Enter your password"
          />
          <button className="btn-place-order btn-signin">SIGN IN</button>
        </div>
      </div>
    </>
  );
};

export default Login;
