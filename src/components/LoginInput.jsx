import React from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import useInput from "../hooks/useInput";
import { login } from "../utils/network-data";

function LoginInput() {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { onLogin } = React.useContext(UserContext);

  const navigate = useNavigate();

  async function handleLogin() {
    const { error, data } = await login({ email, password });

    if (!error && data) {
      await onLogin(data.accessToken);
      navigate("/");
    }
  }

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginInput;
