import { Eye, EyeOff, UserPlus } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center mt-10">
      <div>
        <div className="flex justify-center mb-3">
          <span className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] inline-flex p-3 rounded-2xl text-center">
            <UserPlus className="w-8 h-8 text-white" />
          </span>
        </div>
        <h2 className="text-3xl mb-2 font-bold text-center">
          Create Your Account
        </h2>
        <p className="text-gray-600 text-center">
          Join StudyMate and start collaborating
        </p>

        <div className="card bg-base-100 w-full shrink-0 shadow-2xl mt-5">
          <div className="card-body md:w-xl">
            <fieldset className="fieldset">
              <label className="label font-semibold mt-2" name="email">
                Full Name
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Full Name"
              />
              <label className="label font-semibold mt-2" name="email">
                Email
              </label>
              <input
                type="email"
                className="input w-full"
                placeholder="Enter Your Email"
              />
              <div className="relative">
                <label
                  className="label font-semibold mt-2 mb-1"
                  name="password"
                >
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input w-full "
                  placeholder="Password"
                />
                <button
                  className="absolute top-10.5 right-4 z-10"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-600" />
                  ) : (
                    <Eye size={18} className="text-gray-600" />
                  )}{' '}
                </button>
              </div>
              <label className="label font-semibold mt-2" name="email">
                Photo URL
              </label>
              <input
                type="email"
                className="input w-full"
                placeholder="Enter Your Photo URL"
              />

              <button className="btn bg-[#00B894]  text-white mt-4">
                Register
              </button>
              <div className="flex justify-center text-sm my-4">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
              <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to={'/login'}
                className="text-[#FF6B6B] hover:text-[#00a085] font-semibold"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
