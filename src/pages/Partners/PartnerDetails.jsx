import {
  ArrowLeft,
  Award,
  BookOpen,
  Calendar,
  Mail,
  MapPin,
  Star,
} from 'lucide-react';
import useAxios from '../../Hooks/useAxios';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link, useParams } from 'react-router';

const PartnerDetails = () => {
  const axiosInstance = useAxios();
  const { setLoading } = useAuth();
  const [partner, setPartner] = useState([]);
  const { id } = useParams;

  console.log(id);

  // useEffect(() => {
  //   setLoading(true);
  //   axiosInstance
  //     .get(`/partner/${partner.id}`)
  //     .then((data) => {
  //       setPartner(data.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, [axiosInstance, partner.id, setLoading]);
  return (
    <>
      <div className="min-h-screen bg-[#FAFAFA]">
        {/* Header */}
        <section className="bg-gradient-to-r from-[#FF6B6B] to-[#00B894] text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Profile Content */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-[#FF6B6B]/10 to-[#00B894]/10 p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-200 shadow-xl flex-shrink-0">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl mb-2 font-bold">
                        {partner.name}
                      </h2>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-4 py-1.5 bg-[#00B894] text-white rounded-full">
                          {partner.subject}
                        </span>
                        <span className="px-4 py-1.5 bg-[#FF6B6B] text-white rounded-full">
                          {partner.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin size={20} className=" text-[#FF6B6B]" />
                      <span>{partner.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail size={20} className=" text-[#FF6B6B]" />
                      <span>{partner.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar size={20} className=" text-[#FF6B6B]" />
                      <span>Joined {partner.joinedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          size={20}
                          key={i}
                          className={` ${
                            i < partner.rating
                              ? 'fill-[#FF6B6B] text-[#FF6B6B]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-700 font-semibold">
                        {partner.rating}.0 Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-8 space-y-8">
              {/* Bio */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-6 h-6 text-[#FF6B6B]" />
                  <h3>About</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{partner.bio}</p>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award size={24} className=" text-[#00B894]" />
                  <h3>Achievements</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {/* {partner.achievements.map((achievement, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#F5F5F5] text-[#2D3436] rounded-lg border border-gray-200"
                    >
                      {achievement}
                    </span>
                  ))} */}
                </div>
              </div>

              {/* Availability */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={24} className=" text-[#00B894]" />
                  <h3>Availability</h3>
                </div>
                <p className="text-gray-700">{partner.availability}</p>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button className="w-full font-semibold md:w-auto px-8 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#00B894] text-white rounded-lg hover:shadow-lg transition-all text-lg ">
                  Send Partner Request
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnerDetails;
