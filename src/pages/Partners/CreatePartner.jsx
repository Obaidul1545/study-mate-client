import { UserPlus } from 'lucide-react';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';
import { toast } from 'react-toastify';

const CreatePartner = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profileimage = form.photoUrl.value;
    const subject = form.subject.value;
    const studyMode = form.studyMode.value;
    const availabilityTime = form.availability.value;
    const rating = form.rating.value;
    const partnerCount = form.partnerCount.value;
    const location = form.location.value;
    const experienceLevel = form.experience.value;
    const email = form.email.value;

    const newPartner = {
      name,
      profileimage,
      subject,
      studyMode,
      availabilityTime,
      location,
      experienceLevel,
      rating,
      partnerCount,
      email,
    };
    axiosInstance
      .post('/partners', newPartner)
      .then((data) => {
        if (data.data.insertedId) {
          toast.success('Create Partner Successful!');
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="">
      <section className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white py-12">
        <div className="container mx-auto px-2 sm:px-2">
          <div className="flex items-center gap-3 mb-2">
            <UserPlus size={40} />
            <h1 className="text-4xl font-bold">Create Your Profile</h1>
          </div>
          <p className="text-xl text-white/90">
            Share your details and start connecting with study partners
          </p>
        </div>
      </section>

      <section
        data-aos="zoom-in"
        className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-6 py-12"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-[#2D3436]">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#2D3436]">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg"
                defaultValue={user.email}
                readOnly
                placeholder="Einter your email"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#2D3436]">Photo URL</label>
              <input
                type="url"
                name="photoUrl"
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg"
                placeholder="Enter your photo url"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#2D3436]">
                Primary Subject *
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg "
                placeholder="Enter your subject"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#2D3436]">Location *</label>
              <input
                type="text"
                name="location"
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg"
                placeholder="City, State"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#2D3436]">
                Experience Level *
              </label>
              <select
                name="experience"
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg "
              >
                <option value="">Select your experience level</option>
                <option value="Beginner Level">Beginner Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Advanced Level">Advanced Level</option>
                <option value="Expert Level">Expert Level</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-[#2D3436]">Rating *</label>
              <input
                type="text"
                name="rating"
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg "
                placeholder="Out of 5 - example 4.6"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#2D3436]">Partner Count</label>
              <input
                type="text"
                name="partnerCount"
                defaultValue={0}
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg "
              />
            </div>

            <div>
              <label className="block mb-2 text-[#2D3436]">Study Mode *</label>
              <select
                name="studyMode"
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg "
              >
                <option value="">Select your study mode</option>
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-[#2D3436]">
                Availability Time
              </label>
              <input
                type="text"
                name="availability"
                required
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg "
                placeholder="Weekdays 5-8 PM,"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white rounded-lg hover:shadow-lg transition-all text-lg cursor-pointer font-semibold"
              >
                Create Profile
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-linear-to-r from-[#FF6B6B]/10 to-[#00B894]/10 rounded-xl p-6 border border-[#FF6B6B]/20">
          <h4 className="mb-2 text-[#2D3436]">Profile Tips</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Be honest about your experience level</li>
            <li>
              • Clearly state your availability to help find compatible partners
            </li>
            <li>• Add a professional profile photo to increase connections</li>
            <li>• Write a friendly bio that shows your personality</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CreatePartner;
