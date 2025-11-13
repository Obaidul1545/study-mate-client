import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <main className="grow">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
