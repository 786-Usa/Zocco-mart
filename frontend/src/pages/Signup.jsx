import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [profilePicture, setProfilePicture] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const navigate = useNavigate()

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfilePicture(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSignup = (e) => {
    e.preventDefault()
    // TODO: Add registration logic here
    console.log('Signup attempt:', { fullName, email, password, profilePicture })
        navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Register as a new user
        </h1>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-6">
          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Profile Picture Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-3">
              Profile Picture
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <MdAccountCircle size={48} className="text-gray-400" />
                )}
              </div>
              <label className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <span className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer inline-block text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200">
                  Upload a file
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
