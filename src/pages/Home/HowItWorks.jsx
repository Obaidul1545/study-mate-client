import { MessageCircle, Search, UserPlus } from 'lucide-react';

const HowItWorks = () => {
  return (
    <>
      <div className="bg-base-300 py-10">
        <section className="container mx-auto px-2 sm:px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-2xl font-semibold">How It Works</h2>
            <p className="text-gray-600 text-lg">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              data-aos="fade-right"
              className="relative bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:scale-103 hover:shadow-2xl transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <div className="w-16 h-16 bg-linear-to-br from-[#FF6B6B] to-[#00B894] rounded-xl flex items-center justify-center mb-4">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up and tell us about your subjects, interests, and learning
                style
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="relative bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:scale-103 hover:shadow-2xl transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <div className="w-16 h-16 bg-linear-to-br from-[#FF6B6B] to-[#00B894] rounded-xl flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Find Perfect Matches</h3>
              <p className="text-gray-600">
                Browse and search for study partners based on subject and
                location
              </p>
            </div>

            <div
              data-aos="fade-left"
              className="relative bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:scale-103 hover:shadow-2xl transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <div className="w-16 h-16 bg-linear-to-br from-[#FF6B6B] to-[#00B894] rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Start Collaborating</h3>
              <p className="text-gray-600">
                Connect with your partners and begin your journey to academic
                success
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorks;
