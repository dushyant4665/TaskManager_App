// import React, { useState } from 'react';
// import { login } from '../api'; // Adjust the path based on your structure

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error state
//     setSuccess(false); // Reset success state
//     try {
//       const { data } = await login(formData);
//       localStorage.setItem('token', data.token); // Store JWT token
//       setSuccess(true); // Show success message
//       // Optionally redirect to home or tasks page
//     } catch (error) {
//       setError('Login failed. Please try again.'); // Set error message
//       console.error('Error logging in', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-96">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {success && <p className="text-green-500 text-center">Login successful!</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="relative">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 text-sm bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 ease-in-out"
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               required
//             />
//           </div>
//           <div className="relative">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 text-sm bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 ease-in-out"
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-300 ease-in-out"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const response = await fetch('http://localhost:5000/verify-captcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ captchaToken: captchaValue }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log('CAPTCHA verified: ', result.message);
    } else {
      console.error('CAPTCHA verification failed:', result.message);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login Form</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6 flex justify-center">
            <ReCAPTCHA
              sitekey="your-site-key-here"
              onChange={handleCaptchaChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
