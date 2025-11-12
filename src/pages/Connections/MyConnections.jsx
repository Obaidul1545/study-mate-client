import { Calendar, MessageCircle, Trash2, Users } from 'lucide-react';

const MyConnections = () => {
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

      {/* Stats */}
      <section className="container mx-auto px-2 sm:px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF6B6B] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600">Total Connections</p>
                <p className="text-3xl text-[#2D3436] font-bold">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00B894] rounded-lg flex items-center justify-center">
                <MessageCircle size={24} className=" text-white" />
              </div>
              <div>
                <p className="text-gray-600">Active Partnerships</p>
                <p className="text-3xl text-[#2D3436] font-bold">5</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-linear-to-r from-[#FF6B6B] to-[#00B894] rounded-lg flex items-center justify-center">
                <Calendar size={24} className=" text-white" />
              </div>
              <div>
                <p className="text-gray-600">Pending Requests</p>
                <p className="text-3xl text-[#2D3436] font-bold">10</p>
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
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Subject</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Last Contact</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`border-b border-gray-100 hover:bg-[#F5F5F5] transition-colors bg-white`}
                >
                  <td className="px-6 py-4">
                    <span className="text-[#2D3436] font-semibold">Name</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-[#00B894] text-white text-sm rounded-full">
                      subject
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {/* <span
                          className={`px-3 py-1 ${getStatusColor(
                            connection.status
                          )} text-white text-sm rounded-full`}
                        >
                          {connection.status}
                        </span> */}
                    status
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {/* {connection.lastContact} */}
                    lastContact
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-between">
                      <button
                        className="px-4 py-2 bg-[#00B894] text-white rounded-lg hover:bg-[#00a085] transition-colors text-sm"
                        // onClick={() =>
                        //   alert(`Messaging ${connection.name}...`)
                        // }
                      >
                        Message
                      </button>
                      <button
                        className="px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transition-colors text-sm"
                        // onClick={() => handleDelete(connection.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyConnections;
