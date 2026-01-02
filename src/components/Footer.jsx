import {
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { use } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Footer = () => {
  const { user } = use(AuthContext);
  return (
    <footer className="bg-[#2D3436] text-white ">
      <div className="container mx-auto px-2 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to={'/'} className="flex items-center gap-2 mb-4">
              <div className="bg-[#FF6B6B] p-2 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#FF6B6B] text-xl font-bold">
                StudyMate
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Connect with perfect study partners and achieve your academic
              goals together. Learn better, grow faster.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/find-partners"
                  className="text-gray-300 hover:text-[#FF6B6B] transition-colors"
                >
                  Find Partner
                </Link>
              </li>

              {user ? (
                <>
                  <li>
                    <Link
                      to="/dashboard/create-profile"
                      className="text-gray-300 hover:text-[#FF6B6B] transition-colors"
                    >
                      Create Partner Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/my-connections"
                      className="text-gray-300 hover:text-[#FF6B6B] transition-colors"
                    >
                      My Connections
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/create-profile"
                      className="text-gray-300 hover:text-[#FF6B6B] transition-colors"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-connections"
                      className="text-gray-300 hover:text-[#FF6B6B] transition-colors"
                    >
                      Log in
                    </Link>
                  </li>
                </>
              )}

              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#FF6B6B] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#FF6B6B] transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              <Link
                to={'https://www.facebook.com/'}
                target="_blank"
                className="bg-[#FF6B6B] p-2 rounded-lg hover:bg-[#ff5252] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to={'https://x.com/'}
                target="_blank"
                className="bg-[#FF6B6B] p-2 rounded-lg hover:bg-[#ff5252] transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link>
              <Link
                to={'https://www.instagram.com/'}
                target="_blank"
                className="bg-[#00B894] p-2 rounded-lg hover:bg-[#00a085] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to={'https://www.linkedin.com/'}
                target="_blank"
                className="bg-[#00B894] p-2 rounded-lg hover:bg-[#00a085] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          © 2025 StudyMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
