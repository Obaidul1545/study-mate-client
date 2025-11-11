import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';
import PartnersCard from '../../components/PartnersCard';
import { Search } from 'lucide-react';

const FindPartners = () => {
  const { setLoading } = useAuth();
  const axiosInstance = useAxios();
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get('/partners')
      .then((data) => {
        setPartners(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [axiosInstance, setLoading]);
  return (
    <>
      <section className="bg-linear-to-r from-[#FF6B6B] to-[#00B894] text-white py-12">
        <div className="container mx-auto px-2 sm:px-2">
          <h1 className="text-4xl font-bold">Find Your Study Partner</h1>
          <p className="text-xl text-white/90 mt-2">
            Browse through our community of dedicated students
          </p>
        </div>
      </section>

      <section className="container mx-auto px-2 sm:px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search by Subject..."
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg "
              />
            </div>
            <div>
              <select
                // value={sortBy}
                // onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg"
              >
                <option value="all">All Experience Levels</option>
                <option value="Beginner Level">Beginner Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Advanced Level">Advanced Level</option>
                <option value="Expert Level">Expert Level</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 sm:px-2 ">
        <h3 className="text-gray-600 mb-4">All partners: {partners?.length}</h3>

        {partners?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <PartnersCard key={partners._id} partner={partner}></PartnersCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Search size={48} className=" text-gray-400" />
            </div>
            <h3 className="mb-2">No partners found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default FindPartners;
