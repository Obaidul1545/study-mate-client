const Services = () => {
  return (
    <section className="bg-base-300 py-16">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <p className="text-gray-600">
            We help students learn better together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Study Partner Matching',
            'Group Study Support',
            'Exam Preparation',
            'Skill Sharing',
            'Discussion Rooms',
            'Mentorship',
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-all hover:shadow-2xl "
            >
              <h4 className="text-lg">{service}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
