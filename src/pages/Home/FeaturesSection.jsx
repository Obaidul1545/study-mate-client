import { ShieldCheck, Users, Search, MessageSquare } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-2 sm:px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-3">Awesome Features</h2>
        <p className="text-gray-600">
          Everything you need for better collaboration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            icon: <Users />,
            title: 'Smart Matching',
            desc: 'Find partners based on subject and preferences',
          },
          {
            icon: <Search />,
            title: 'Advanced Search',
            desc: 'Filter students by skills and location',
          },
          {
            icon: <MessageSquare />,
            title: 'Instant Chat',
            desc: 'Communicate in real-time',
          },
          {
            icon: <ShieldCheck />,
            title: 'Secure Profiles',
            desc: 'Verified and trusted students',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-all hover:shadow-2xl text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-linear-to-br from-[#FF6B6B] to-[#00B894] text-white rounded-lg">
              {item.icon}
            </div>
            <h4 className="mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
