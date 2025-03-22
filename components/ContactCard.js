// eslint-disable-next-line import/no-extraneous-dependencies
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const ContactSection = () => (
  <section className="contact-section">
    <div style={{
      width: 'fit-content', margin: '0 auto', marginBottom: '30px', marginTop: '-30px',
    }}
    >
      <Image
        src="/contact.png"
        alt="Contact Header"
        width={200}
        height={55}
        priority
      />
    </div><br />

    {/* Social Links */}
    <div className="social-links">
      <a href="https://github.com/dylankmoore" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://linkedin.com/in/dylankmoore" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="mailto:dylankmoore@gmail.com">
        <FaEnvelope size={30} />
      </a>
    </div><br />

    {/* Contact Form */}
    <form
      action="https://formspree.io/f/xnnppwnj"
      method="POST"
      className="contact-form"
      style={{ paddingLeft: '40px' }}
    >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="5" required />

      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default ContactSection;
