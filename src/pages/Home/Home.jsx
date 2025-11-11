import HeroSection from '../../components/HeroSection';
import TopPartners from './TopPartners';
import HowItWorks from './HowItWorks';
import ExtraSections from './ExtraSections';
import Review from './Review';

const Home = () => {
  return (
    <>
      <section>
        <HeroSection></HeroSection>
      </section>
      <section>
        <TopPartners></TopPartners>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section>
        <Review></Review>
      </section>
      <section>
        <ExtraSections></ExtraSections>
      </section>
    </>
  );
};

export default Home;
