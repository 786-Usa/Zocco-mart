import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../features/api/apiSlice";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [signup, { isLoading, isError, isSuccess }] = useRegisterMutation();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", profilePicture);
    try {
      const res = await signup(formData).unwrap();
      toast.success(res.message || "Signup successful");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error?.data?.message || "Signup failed");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error signing up. Please try again.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      {" "}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Register as a new user
        </h1>

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-3">
              Profile Picture
            </label>
            <div className="flex items-center gap-4">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <MdAccountCircle size={48} />
              )}

              <input type="file" accept="image/*" onChange={handleFileUpload} />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Submit
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
