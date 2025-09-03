import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import uploadImage from '../../utils/uploadImage';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  //Handle Sign Up Form submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl= "";

    if(!fullName){
      setError("Please enter your name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    };

    if (!password) {
      setError("Please enter the password.");
      return;
    
    }

    setError("");

    //SignUp API Call
    try {
      
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
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
        <h3 className="text-5xl md:text-6xl leading-tight font-semibold text-black">Create your account</h3>
        <p className="text-base md:text-lg text-black/70 mt-3 mb-10">Join us by entering your details below.</p>

        <form onSubmit={handleSignUp}>
          <div className="mb-6 max-w-fit">
            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm md:text-base text-black/80">Full name</label>
              <div className="glass-input text-black">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent text-black placeholder-black/50 outline-none"
                  value={fullName}
                  onChange={({ target }) => setFullName(target.value)}
                />
              </div>
            </div>

            <div>
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

            <div className="md:col-span-2">
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

            <div className="md:col-span-2 flex items-center gap-3 mt-2">
              <button type="submit" className="glass-btn-primary">Sign up</button>
              <span className="text-sm text-black/60">or</span>
              <Link to="/login" className="glass-btn-secondary">Log in</Link>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp