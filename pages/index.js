import React from 'react';
import Image from 'next/image';
import ProjectsSection from './projects';
import About from './about';

const Home = () => (
  <>
    {/* Hero / Intro */}
    <section className="hero-section" style={{ padding: '80px 0' }}>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{ maxWidth: '475px', margin: '0 auto' }}
      >
        <br />
        <div style={{ transform: 'translateX(15px)' }} className="hello-animate">
          <Image
            src="/hello (1).png"
            alt="Hello"
            width={340}
            height={150}
            priority
          />
        </div>
        <br />
        <p>I’m Dylan Moore — a Full Stack Web Developer based in Nashville, Tennessee.</p>
      </div>
    </section>

    <div className="section-divider">
      <Image
        src="/line.png"
        alt="Section Break"
        width={600}
        height={40}
        priority
      />
    </div>

    {/* About Section */}
    <About />

    {/* Projects Section */}
    <ProjectsSection />
  </>
);

export default Home;
