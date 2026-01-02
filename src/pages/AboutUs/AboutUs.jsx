import { Users, Target, Heart, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-white/90 mt-2 max-w-2xl">
            Learn more about our mission, vision, and values.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We are a student-focused platform designed to help learners find
            compatible study partners. By connecting students based on subjects,
            experience level, and study preferences, we aim to make learning
            more effective and collaborative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm text-center">
            <Users className="mx-auto text-[#00B894] mb-4" size={36} />
            <h3 className="font-semibold mb-2">Our Community</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Thousands of learners supporting each other every day.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm text-center">
            <Target className="mx-auto text-[#00B894] mb-4" size={36} />
            <h3 className="font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              To make collaborative learning accessible for everyone.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm text-center">
            <Heart className="mx-auto text-[#00B894] mb-4" size={36} />
            <h3 className="font-semibold mb-2">Our Values</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Trust, growth, and mutual respect among learners.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm text-center">
            <Award className="mx-auto text-[#00B894] mb-4" size={36} />
            <h3 className="font-semibold mb-2">Our Goal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Helping students achieve better results together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
