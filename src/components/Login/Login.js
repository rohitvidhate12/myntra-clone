import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../Slices/RegisteredUsersSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registeredUsers = useSelector(
    (store) => store.registeredUsers.registeredUsers
  );

  console.log(registeredUsers);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchingUser = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchingUser) {
      dispatch(setLoggedIn(true));
      navigate("/bag");
    } else {
      console.log("Invalid email or password");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="login-container">
        <p className="heading">
          <strong className="heading-name">Login</strong> or{" "}
          <strong className="heading-name">Signup</strong>{" "}
        </p>
        <div className="box">
          <input
            className="input-box"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <input
            className="input-box"
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="bottom-box">
            <p>
              I agree to the <strong className="strng">Term of Use</strong> &{" "}
              <strong className="strng">Privacy Policy</strong>
            </p>
            <button
              className="btn-place-order btn-signin"
              onClick={handleSubmit}
            >
              SIGN IN
            </button>
            <p>
              Have trouble logging in?{" "}
              <strong className="strng">Get Help</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
