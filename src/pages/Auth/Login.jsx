import { Eye, EyeOff, LogIn } from 'lucide-react';
import { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInGoogle, signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success('Login Successful!');
        e.target.reset();
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSignInGoogle = (e) => {
    e.preventDefault();
    signInGoogle()
      .then(() => {
        toast.success('Login Successful!');
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center mt-10">
      <div>
        <div className="flex justify-center mb-3">
          <span className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] inline-flex p-3 rounded-2xl text-center">
            <LogIn className="w-8 h-8 text-white" />
          </span>
        </div>
        <h2 className="text-3xl mb-2 font-bold text-center">Welcome Back!</h2>
        <p className="text-gray-600 text-center">
          Sign in to continue your study journey
        </p>

        <div
          data-aos="zoom-in"
          className="card bg-base-100 w-full shrink-0 shadow-2xl mt-5"
        >
          <div className="card-body md:w-xl">
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
                <label className="label font-semibold mt-2">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Enter Your Email"
                  name="email"
                />
                <div className="relative">
                  <label className="label font-semibold mt-2 mb-1">
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="input w-full "
                    placeholder="Password"
                    name="password"
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
                <div>
                  <a className="link link-hover hover:text-[#FF6B6B] ">
                    Forgot password?
                  </a>
                </div>
                <button className="btn bg-[#FF6B6B]  text-white mt-4">
                  Login
                </button>
                <div className="flex justify-center text-sm my-4">
                  <span className="px-4 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
                <button
                  onClick={handleSignInGoogle}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
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
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-[#00B894] hover:text-[#FF6B6B] font-semibold"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
