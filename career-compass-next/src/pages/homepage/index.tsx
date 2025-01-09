import React from 'react';
import FeatureSection from '../../components/home/featureSection';
import HeroSection from '../../components/home/heroSection';
import Footer from '../../components/layout/footer';
import Header from '../../components/layout/header';

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main
        style={{
          flexGrow: 1,
        }}
      >
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
