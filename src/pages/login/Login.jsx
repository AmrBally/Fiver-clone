import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Auth/Auth";

const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleClick = () => {
    auth.login(user);
    navigate("/", { replace: true });
  };

  return (
    <div className="login">
      <div className="container">
        <h1>PLease login</h1>
        <label>
          Username :{" "}
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
