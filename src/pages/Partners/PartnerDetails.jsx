import {
  ArrowLeft,
  Award,
  Calendar,
  ContactRound,
  Mail,
  MapPin,
  Star,
  UserStar,
} from 'lucide-react';
import useAxios from '../../Hooks/useAxios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../components/LoadingSpinner';

const PartnerDetails = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [partner, setPartner] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [refetch, setReFetch] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/partner/${id}`)
      .then((data) => {
        setPartner(data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id, refetch, axiosInstance]);

  const {
    name,
    profileimage,
    subject,
    studyMode,
    availabilityTime,
    location,
    experienceLevel,
    rating,
    partnerCount,
    email,
  } = partner || {};

  const handleSendRequest = async () => {
    try {
      const data = await axiosInstance.post(`send-request/${id}`, {
        userEmail: user.email,
      });

      if (data.data.success) {
        toast.success('Partner request sent successfully!');
        setReFetch(!refetch);
      } else {
        toast.error(data.data.message || 'Failed to send request');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      <div className="">
        <section className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white py-8">
          <div className="container mx-auto px-2 sm:px-4">
            <Link
              to="/find-partners"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4"
            >
              <ArrowLeft size={20} />
              Back to All Partners
            </Link>
            <h1 className="text-4xl font-bold">Partner Profile</h1>
          </div>
        </section>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <section
            data-aos="zoom-in"
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-linear-to-r from-[#FF6B6B]/10 to-[#00B894]/10 p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-200 shadow-xl shrink-0">
                    <img
                      src={profileimage}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl mb-2 font-bold">{name}</h2>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-4 py-1.5 bg-[#00B894] text-white rounded-full">
                            {subject}
                          </span>
                          <span className="px-4 py-1.5 bg-[#FF6B6B] text-white rounded-full">
                            {experienceLevel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={20} className=" text-[#FF6B6B]" />
                        <span>{location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Mail size={20} className=" text-[#FF6B6B]" />
                        <span>{email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <ContactRound size={20} className=" text-[#FF6B6B]" />
                        <span>
                          Partner Count:{' '}
                          <span className="px-4 py-1 bg-linear-to-r from-[#FF6B6B]/10 to-[#00B894]/10text-[#2D3436] rounded-lg border border-gray-200">
                            {partnerCount}{' '}
                          </span>{' '}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <UserStar size={20} className=" text-[#FF6B6B]" />
                        <span className=" text-gray-700 inline-flex items-center gap-2">
                          Rating: {rating}
                          <span>
                            <Star
                              size={16}
                              className="text-amber-400 fill-amber-400"
                            />{' '}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={24} className=" text-[#00B894]" />
                    <h3>Availability</h3>
                  </div>
                  <div className="flex gap-3">
                    <p className="px-4 py-2 bg-[#F5F5F5] text-[#2D3436] rounded-lg border border-gray-200">
                      {availabilityTime}
                    </p>
                    <p className="px-4 py-2 bg-[#F5F5F5] text-[#2D3436] rounded-lg border border-gray-200">
                      {studyMode}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={24} className=" text-[#00B894]" />
                    <h3>Achievements</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-[#F5F5F5] text-[#2D3436] rounded-lg border border-gray-200">
                      100+ Study Sessions
                    </span>
                    <span className="px-4 py-2 bg-[#F5F5F5] text-[#2D3436] rounded-lg border border-gray-200">
                      Top Rated Partner
                    </span>
                    <span className="px-4 py-2 bg-[#F5F5F5] text-[#2D3436] rounded-lg border border-gray-200">
                      Graduate
                    </span>
                  </div>
                </div>

                <div className="pt-4 text-end">
                  <button
                    onClick={handleSendRequest}
                    className="w-full font-semibold md:w-auto px-8 py-3 bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white rounded-lg hover:shadow-lg transition-all text-lg cursor-pointer"
                  >
                    Send Partner Request
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PartnerDetails;
