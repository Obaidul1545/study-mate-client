import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const ExtraSections = () => {
  return (
    <>
      <section className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white py-16">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <h2 className="text-4xl mb-4 font-bold">
            Ready to Find Your Study Partner?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students already collaborating on StudyMate
          </p>

          <Link
            to={'/find-partners'}
            className=" gap-2 font-semibold
            px-2 md:px-4 lg:px-8 py-1 md:py-3 bg-white text-[#FF6B6B] rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg inline-flex items-center"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ExtraSections;
