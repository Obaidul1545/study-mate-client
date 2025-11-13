import { MapPin, Star } from 'lucide-react';

import { Link } from 'react-router';

const PartnersCard = ({ partner }) => {
  const {
    _id,
    name,
    profileimage,
    subject,
    studyMode,
    location,
    experienceLevel,
    rating,
  } = partner || {};

  return (
    <div data-aos="zoom-in">
      <div className="card bg-base-100 shadow-sm ">
        <figure>
          <img
            src={profileimage}
            alt=""
            className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>
        <div className="card-body">
          <h3 className="mb-1 font-semibold">{name}</h3>
          <div className="flex items-center gap-2 ">
            <span className="px-3 py-1 bg-[#00B894] text-white text-sm rounded-full">
              {subject}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600 ">
            <MapPin size={16} />
            <span>{location}</span>
            <span className="px-3 py-1 bg-[#00B894] text-white text-sm rounded-full ml-3">
              {studyMode}
            </span>
          </div>
          <div className="text-sm text-gray-600">{experienceLevel}</div>

          <div>
            <span className=" text-sm text-gray-600 inline-flex items-center gap-1">
              Rating: {rating}
              <span>
                <Star size={16} className="text-amber-400 fill-amber-400" />{' '}
              </span>
            </span>
          </div>

          <div className="card-actions">
            <Link
              to={`/partners-details/${_id}`}
              className="block w-full px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transition-colors text-center"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCard;
