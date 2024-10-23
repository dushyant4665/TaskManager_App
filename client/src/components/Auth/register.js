import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha'; 
import { register } from '../../api';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    if (!captchaValue) {
      alert('Please complete the CAPTCHA.');
      setLoading(false);
      return;
    }

    try {
      const captchaResponse = await fetch('http://localhost:5000/verify-captcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ captchaToken: captchaValue }),
      });

      const captchaResult = await captchaResponse.json();

      if (captchaResponse.ok) {
        const { data } = await register(formData);
        localStorage.setItem('token', data.token);
        setSuccess(true);
        setLoading(false);
      } else {
        throw new Error(captchaResult.message);
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
      setLoading(false); 
      console.error('Error during registration', error);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-600 via-black to-gray-500 text-white">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
              placeholder="Enter your username"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
              placeholder="Enter your email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
              placeholder="Enter your password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

       
          <div className="mb-6 flex justify-center">
            <HCaptcha
              sitekey={process.env.REACT_APP_HCAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          </div>

      
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

      
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          
   
          {success && (
            <p className="text-green-500 text-center mt-4">
              Registration successful!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
