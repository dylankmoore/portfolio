/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const AboutCard = () => (
  <section className="about-section" style={{ padding: '70px 0 -30px 0' }}>
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{ maxWidth: '600px', margin: '0 auto' }}
    ><br /><br /><br /><br />
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        <Image
          className="about-header"
          src="/aboutme.png"
          alt="About Me"
          width={250}
          height={80}
          priority
        />
      </div>
      <br /><br />

      <p>
        My journey with web design began in the early days of Geocities and Expage, where I taught myself basic HTML and CSS to build fun, personal pages. After many years in the service industry, I craved a new challenge and decided to revisit my early interest in design and development by enrolling at Nashville Software School.
      </p>
      <p>
        I recently graduated with a certificate in Full Stack Web Development, where I gained hands-on experience building responsive, user-friendly applications using technologies like C#, .NET, React, and Next.js. Since then, I've been freelancing and continuing to sharpen my skills through personal projects.
      </p>
      <p>
        I'm actively seeking full time work opportunities where I can contribute, grow, and continue learning as a developer. I'm also open to freelance projects and collaborations. If you have an idea you'd like to bring to life — or you're hiring — I'd love to connect!
      </p>
    </div><br /><br /><br />
    <div className="section-divider">
      <Image
        src="/line.png"
        alt="Section Break"
        width={600}
        height={40}
        priority
      />
    </div>
  </section>

);

export default AboutCard;
