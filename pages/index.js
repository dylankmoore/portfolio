import React from 'react';
import ProjectsSection from './projects';

const Home = () => (
  <>
    <section className="hero-section" style={{ height: '90vh', padding: '80px' }}>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{ maxWidth: '475px', margin: '0 auto' }}
      >
        <h1>Hello!</h1> I am a Full Stack Web Developer based in Nashville, Tennessee. I’m currently freelancing and always looking for new projects. If you have a fun idea, please get in touch!
      </div>
    </section>

    {/* Additional Sections */}
    <ProjectsSection />
  </>
);

export default Home;
