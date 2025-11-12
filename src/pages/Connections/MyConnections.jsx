import { Calendar, MessageCircle, Trash2, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const MyConnections = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetch, setRefetch] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  }, [axiosInstance, setLoading, user, fetch]);

  // Update
  const handleEditClick = (request) => {
    setEditData(request);
    setIsModalOpen(true);
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();

    const form = e.target;
    const partnerSubject = form.subject.value;
    const partnerStudyMode = form.studyMode.value;
    const availabilityTime = form.availabilityTime.value;

    const data = {
      partnerSubject,
      partnerStudyMode,
      availabilityTime,
    };

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .put(`/all-requests/${id}`, data)
          .then((data) => {
            Swal.fire('Updated!', '', 'success');
            setIsModalOpen(false);
            setRefetch(!fetch);
          })
          .catch((error) => {
            Swal.fire('Error updating!', '', 'error');
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };

  // Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to Delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF6B6B',
      cancelButtonColor: '#00B894',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/all-requests/${id}`)
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Request has been deleted.',
                icon: 'success',
              });
            }
            setRefetch(!fetch);
          })
          .catch((error) => {
            toast.error('Delete failed!');
          });
      }
    });
  };

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
                  <th className="px-6 py-4 text-center">Availability Time</th>
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
                    <td className="px-6 py-4">{partner.availabilityTime}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-around gap-5">
                        <button
                          className="px-4 py-1 bg-[#00B894] text-white rounded-lg hover:bg-[#00a085] transition-colors text-sm cursor-pointer"
                          onClick={() => handleEditClick(partner)}
                        >
                          Update
                        </button>
                        <button
                          className="px-2 py-1 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transition-colors text-sm cursor-pointer inline-flex items-center gap-2 "
                          onClick={() => handleDelete(partner._id)}
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

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById('my_modal_5').showModal()}
      >
        open modal
      </button> */}

      {isModalOpen && (
        <dialog
          open
          id="updateModal"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Request</h3>
            <form onSubmit={(e) => handleUpdate(e, editData._id)}>
              <label className="block mb-1 font-medium">Subject</label>
              <input
                type="text"
                defaultValue={editData?.partnerSubject || ''}
                name="subject"
                className="input input-bordered w-full mb-3"
              />

              <label className="block mb-1 font-medium">Study Mode</label>
              <select
                defaultValue={editData?.partnerStudyMode || ''}
                name="studyMode"
                className="select select-bordered w-full mb-3"
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>

              <label className="block mb-1 font-medium">
                Availability Time{' '}
              </label>
              <input
                type="text"
                defaultValue={editData?.availabilityTime || ''}
                name="availabilityTime"
                className="input input-bordered w-full mb-3"
              />

              <div className="modal-action">
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyConnections;
