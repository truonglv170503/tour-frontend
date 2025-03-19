import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../assets/css/style.css";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const success = await signup(name, email, password);
    if (success) navigate("/");
  };

  return (
    <div className="login-container">
      <div className="signup-box">
        <h2 className="login-title">CREATE YOUR ACCOUNT!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button className="login-button" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "SIGN UP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
