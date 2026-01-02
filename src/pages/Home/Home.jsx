import HeroSection from '../../components/HeroSection';
import TopPartners from './TopPartners';
import HowItWorks from './HowItWorks';
import ExtraSections from './ExtraSections';
import Review from './Review';
import FeaturesSection from './FeaturesSection';
import Services from './Services';
import Statistics from './Statistics';
import FAQ from './FAQ';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <>
      <section>
        <HeroSection></HeroSection>
      </section>
      <section>
        <Statistics></Statistics>
      </section>
      <section>
        <TopPartners></TopPartners>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section>
        <FeaturesSection></FeaturesSection>
      </section>
      <section>
        <Services></Services>
      </section>
      <section>
        <FAQ></FAQ>
      </section>
      <section>
        <Newsletter></Newsletter>
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
