import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Inputs/Input";
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  // Handle login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password){
      setError("Please eneter the password.");
      return;
    }

    setError("");

    // Login API Call 
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user)); 
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };


   return (
    <AuthLayout>
      <div className="flex flex-col">
        <h3 className="text-5xl md:text-6xl leading-tight font-semibold text-black">Hey,
          <br />
          Welcome to eXpenso!
        </h3>
        <p className="text-base md:text-lg text-black/70 mt-3 mb-10">...your new expense tracking app.</p>

        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <label className="text-sm md:text-base text-black/80">Email address</label>
            <div className="glass-input text-black">
              <input
                type="text"
                placeholder="john@example.com"
                className="w-full bg-transparent text-black placeholder-black/50 outline-none"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="text-sm md:text-base text-black/80">Password</label>
            <div className="glass-input text-black">
              <input
                type="password"
                placeholder="Min 8 characters"
                className="w-full bg-transparent text-black placeholder-black/50 outline-none"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          <div className="flex items-center gap-3 mt-4">
            <button type="submit" className="glass-btn-primary">
              Login
            </button>
            <span className="text-sm text-black/60">or</span>
            <Link to="/signup" className="glass-btn-secondary">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login