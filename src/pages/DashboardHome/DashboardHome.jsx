import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Users, UserPlus, CheckCircle, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';
import LoadingSpinner from '../../components/LoadingSpinner';
import OverviewCard from './OverviewCard';

const DashboardHome = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [partners, setPartners] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosInstance
        .get(`/partners`)
        .then((res) => {
          setPartners(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [axiosInstance, user]);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosInstance
        .get(`/all-requests?email=${user?.email}`)
        .then((data) => {
          setRequests(data.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [axiosInstance, setLoading, user]);

  const chartData = partners.reduce((acc, curr) => {
    const index = acc.findIndex((item) => item.name === curr.subject);
    if (index >= 0) {
      acc[index].partners += 1;
    } else {
      acc.push({ name: curr.subject, partners: 1 });
    }
    return acc;
  }, []);

  if (loading) return <LoadingSpinner />;
  return (
    <div>
      <div className="p-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <OverviewCard
            title="Total Partners"
            value={partners.length}
            icon={<Users />}
            color="#00B894"
          />
          <OverviewCard
            title="Total Requests"
            value={requests.length}
            icon={<UserPlus />}
            color="#0984E3"
          />
          <OverviewCard
            title="Accepted"
            value={partners.length}
            icon={<CheckCircle />}
            color="#00B894"
          />
          <OverviewCard
            title="Rejected"
            value={partners.length}
            icon={<XCircle />}
            color="#FF6B6B"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-4">All Partners</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="partners" fill="#00B894" radius={[6, 6, 0, 0]} />
                <Bar dataKey="requests" fill="#FF6B6B" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-4">Growth Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="partners"
                  stroke="#00B894"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="requests"
                  stroke="#FF6B6B"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
