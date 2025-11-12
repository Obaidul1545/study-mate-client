import { Calendar, MessageCircle, Trash2, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';

const MyConnections = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const { user } = useAuth();

  // all-requests
  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosInstance
        .get(`/all-requests?email=${user?.email}`)
        .then((data) => {
          setRequests(data.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [axiosInstance, setLoading, user]);

  console.log(requests.partnerEmail);

  return (
    <div>
      <section className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white py-12">
        <div className="container mx-auto px-2 sm:px-4 ">
          <div className="flex items-center gap-3 mb-2">
            <Users size={40} />
            <h1 className="text-4xl font-bold">My Connections</h1>
          </div>
          <p className="text-xl text-white/90">
            Manage your study partners and collaborations
          </p>
        </div>
      </section>

      <section className="container mx-auto px-2 sm:px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF6B6B] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600">Total Connections</p>
                <p className="text-3xl text-[#2D3436] font-bold">
                  {requests?.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 sm:px-4 pb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white">
                  <th className="px-6 py-4 text-center">Name</th>
                  <th className="px-6 py-4 text-center">Subject</th>
                  <th className="px-6 py-4 text-center">Study Mode</th>

                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((partner) => (
                  <tr
                    key={partner._id}
                    className={`border-b border-gray-100 hover:bg-[#F5F5F5] transition-colors bg-white text-center`}
                  >
                    <td className="px-6 py-4 flex gap-3 items-center">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={partner.partnerImage} alt="" />
                      </div>
                      <span className="text-[#2D3436] font-semibold">
                        {partner.partnerName}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-[#00B894] text-white text-sm rounded-full">
                        {partner.partnerSubject}
                      </span>
                    </td>
                    <td className="px-6 py-4">{partner.partnerStudyMode}</td>

                    <td className="px-6 py-4">
                      <div className="flex justify-around gap-5">
                        <button
                          className="px-4 py-1 bg-[#00B894] text-white rounded-lg hover:bg-[#00a085] transition-colors text-sm cursor-pointer"
                          // onClick={() =>
                          //   alert(`Messaging ${connection.name}...`)
                          // }
                        >
                          Update
                        </button>
                        <button
                          className="px-2 py-1 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transition-colors text-sm cursor-pointer inline-flex items-center gap-2 "
                          // onClick={() => handleDelete(connection.id)}
                        >
                          <Trash2 size={16} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyConnections;
