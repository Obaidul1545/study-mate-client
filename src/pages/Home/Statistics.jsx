const Statistics = () => {
  return (
    <section className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white py-16">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p>Students</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">2K+</h3>
            <p>Study Groups</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">95%</h3>
            <p>Success Rate</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
