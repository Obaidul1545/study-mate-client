import { ArrowRight } from 'lucide-react';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Keyboard,
  Mousewheel,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSection = () => {
  const { user } = use(AuthContext);

  return (
    <div className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 font-bold">
            Find Your Perfect Study Partner
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-8 text-white/90">
            Connect with students, share knowledge, and achieve your academic
            goals together
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/find-partners"
              className="px-2 md:px-4 lg:px-8 py-1 md:py-3 bg-white text-[#FF6B6B] rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg inline-flex items-center gap-2 font-semibold"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={user ? '/create-profile' : '/register'}
              className="px-2 md:px-4 lg:px-8 py-1 md:py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-base md:text-lg font-semibold"
            >
              Create Profile
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className=" bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="custom-swiper"
          >
            <SwiperSlide>
              <div className="">
                <h2 className="text-xl md:text-3xl mb-4 font-semibold">
                  Connect with Study Partners
                </h2>
                <p className="text-lg md:text-xl text-white/90">
                  Find students who share your academic goals and learning style
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <h2 className="text-xl md:text-3xl mb-4 font-semibold">
                  Collaborate & Achieve
                </h2>
                <p className="text-lg md:text-xl text-white/90">
                  Work together, share knowledge, and excel in your studies
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <h2 className="text-xl md:text-3xl mb-4 font-semibold">
                  Build Lasting Connections
                </h2>
                <p className="text-lg md:text-xl text-white/90">
                  Create meaningful relationships that go beyond the classroom
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h2 className="text-3xl mb-4" style={{ fontWeight: 600 }}>
              {carouselSlides[currentSlide].title}
            </h2>
            <p className="text-xl text-white/90">
              {carouselSlides[currentSlide].description}
            </p>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button> */}

        {/* <div className="flex justify-center gap-2 mt-6">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))} */}
        {/* </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
