import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-white/90 mt-2 max-w-2xl">
            Have a question or want to work with us? We’d love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 space-y-6">
              <h3 className="text-xl font-semibold">Get in touch</h3>

              <div className="flex items-start gap-3">
                <MapPin className="text-[#00B894]" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-[#00B894]" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    support@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-[#00B894]" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    +880 100000000000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="md:col-span-2 w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="md:col-span-2 w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="md:col-span-2 inline-flex items-center justify-center gap-2 bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
