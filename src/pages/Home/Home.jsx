import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import HeroSection from '../../components/HeroSection';

const Home = () => {
  const { user } = use(AuthContext);

  return (
    <>
      <section>
        <HeroSection></HeroSection>
      </section>
    </>
  );
};

export default Home;
