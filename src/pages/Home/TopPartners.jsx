import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import PartnersCard from '../../components/PartnersCard';
import { Link } from 'react-router';
import LoadingSpinner from '../../components/LoadingSpinner';

const TopPartners = () => {
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const [topPartners, setTopPartners] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get('/top-partners')
      .then((data) => {
        setTopPartners(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [axiosInstance, setLoading]);

  return (
    <>
      <section className="container mx-auto px-2 sm:px-4 py-16">
        <div className="flex flex-col md:flex-row text-center md:text-left gap-5 justify-between items-center mb-8">
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Top Study Partners</h2>
            <p className="text-gray-600">
              Connect with our most active and helpful members
            </p>
          </div>
          <Link
            to="/find-partners"
            className="px-6 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#ff5252] transition-colors"
          >
            View All
          </Link>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPartners.map((partner) => (
              <PartnersCard key={partner._id} partner={partner} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default TopPartners;
