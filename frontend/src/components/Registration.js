import React, { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="registration-form">
      <h1>Registration</h1>
      <input
        className="registration-input"
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="Enter Name"
      />
      <input
        className="registration-input"
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="Enter Email"
      />
      <input
        className="registration-input"
        type="text"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="Enter Password"
      />
      <input
        className="registration-input"
        type="password"
        value={confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
        placeholder="Enter Confirm Password"
      />
      <button
        type="button"
        onClick={() => {
          console.warn(name, email, password, confirmPassword);
        }}
        className="registration-button"
      >
        Register
      </button>
    </div>
  );
};

export default Registration;
