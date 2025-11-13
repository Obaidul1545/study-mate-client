import { Quote, Star } from 'lucide-react';
import React from 'react';

const Review = () => {
  return (
    <div>
      <section className="container mx-auto px-2 sm:px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-2xl font-semibold">What Our Students Say</h2>
          <p className="text-gray-600 text-lg">
            Real experiences from real students
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            data-aos="fade-right"
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8oSh4ryKwqcpo2rfo3IgO_NcMpGOY3GNYlODizShP7keD5r5s6pdoc4&s"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4>Alex Turner</h4>
                <p className="text-sm text-gray-600">Mathematics Student</p>
              </div>
            </div>
            <div>
              <span className=" text-sm text-gray-600 inline-flex items-center gap-1 mb-3">
                Rating: 4.5
                <span>
                  <Star size={16} className="text-amber-400 fill-amber-400" />{' '}
                </span>
              </span>
            </div>

            <div className="relative">
              <Quote
                size={32}
                className="absolute -top-2 -left-4 text-[#00B894] opacity-20"
              />
              <p className="text-gray-700 relative z-10 pl-4">
                "StudyMate helped me find the perfect study partner for my
                calculus class. My grades improved dramatically!"
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4>Priya Patel</h4>
                <p className="text-sm text-gray-600">
                  Computer Science Student
                </p>
              </div>
            </div>
            <div>
              <span className=" text-sm text-gray-600 inline-flex items-center gap-1 mb-3">
                Rating: 4.9
                <span>
                  <Star size={16} className="text-amber-400 fill-amber-400" />{' '}
                </span>
              </span>
            </div>

            <div className="relative">
              <Quote
                size={32}
                className="absolute -top-2 -left-4 text-[#00B894] opacity-20"
              />
              <p className="text-gray-700 relative z-10 pl-4">
                "I love how easy it is to connect with students who have similar
                learning goals. This platform is a game-changer!"
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4>David Kim</h4>
                <p className="text-sm text-gray-600">Biology Student</p>
              </div>
            </div>
            <div>
              <span className=" text-sm text-gray-600 inline-flex items-center gap-1 mb-3">
                Rating: 3.5
                <span>
                  <Star size={16} className="text-amber-400 fill-amber-400" />{' '}
                </span>
              </span>
            </div>

            <div className="relative">
              <Quote
                size={32}
                className="absolute -top-2 -left-4 text-[#00B894] opacity-20"
              />
              <p className="text-gray-700 relative z-10 pl-4">
                "Great platform for finding study groups. I've made so many
                friends and my academic performance has never been better."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
