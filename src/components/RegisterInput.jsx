import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";

function RegisterInput() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const navigate = useNavigate();

  async function handleRegister() {
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }

    const { error } = await register({
      name,
      email,
      password,
    });

    if (!error) {
      navigate("/login");
    }
  }

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default RegisterInput;
