import { Link } from 'react-router';
import { BookOpen, Calendar, Edit, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';
import LoadingSpinner from '../../components/LoadingSpinner';

const Profile = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const [DBUser, setDBUser] = useState({});

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/users?email=${user.email}`)
      .then((data) => {
        setDBUser(data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [axiosInstance, setLoading, user]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <>
      <section className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white py-12">
        <div className="container mx-auto px-2 sm:px-4 ">
          <h1 className="text-4xl mb-2 font-bold">My Profile</h1>
          <p className="text-xl text-white/90">
            Manage your information and preferences
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-2 sm:px-4  py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-linear-to-r from-[#FF6B6B]/10 to-[#00B894]/10 p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gray-200 shadow-xl shrink-0">
                <img
                  src={DBUser.photoURL}
                  alt={DBUser.displayName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-3">
                      {DBUser.displayName}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#00B894] text-white text-sm rounded-full">
                        subject
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/dashboard/create-profile"
                    className="px-5 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transition-colors flex items-center gap-2"
                  >
                    <Edit size={16} />
                    Create Partners Profile
                  </Link>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail size={20} className=" text-[#FF6B6B]" />
                    <span>{DBUser.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin size={20} className=" text-[#FF6B6B]" />
                    <span>{DBUser?.location || 'Not added'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar size={20} className=" text-[#FF6B6B]" />
                    <span>
                      Member since{' '}
                      {new Date(DBUser.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={24} className=" text-[#FF6B6B]" />
                <h3>About Me</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {user?.bio || 'No Added'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/dashboard/my-connections"
                className="px-6 py-3 bg-[#00B894] text-white rounded-lg hover:bg-[#00a085] transition-colors"
              >
                View My Connections
              </Link>
              <Link
                to="/find-partners"
                className="px-6 py-3 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transition-colors"
              >
                Find Study Partners
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-lg">
              <div className="w-10 h-10 bg-[#00B894] rounded-full flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[#2D3436] font-semibold">
                  Study session completed with Sarah Johnson
                </p>
                <p className="text-sm text-gray-600">2 days ago</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-lg">
              <div className="w-10 h-10 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[#2D3436] font-semibold">
                  New connection request from Michael Chen
                </p>
                <p className="text-sm text-gray-600">5 days ago</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-lg">
              <div className="w-10 h-10 bg-[#00B894] rounded-full flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[#2D3436] font-semibold">
                  Study session completed with Emma Williams
                </p>
                <p className="text-sm text-gray-600">1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
