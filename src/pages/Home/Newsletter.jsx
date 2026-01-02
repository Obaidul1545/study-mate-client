const Newsletter = () => {
  return (
    <section className="bg-base-300 py-16">
      <div className="container mx-auto px-2 sm:px-4 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get study tips and updates directly in your inbox
        </p>

        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border border-[#00b893]  w-74"
          />
          <button className="bg-[#FF6B6B] hover:bg-[#f34747] text-white px-6 py-2 rounded-lg cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
