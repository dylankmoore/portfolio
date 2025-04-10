import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from '../components/FooterCard';

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/projects');
  };

  return (
    <>
      <Head>
        <title>Your Name</title>
      </Head>
      <div className="home-wrapper">
        <h1 className="main-name">DYLAN MOORE</h1>
        <p className="subtitle">Fullstack Software Developer</p>
        <button type="button" className="view-work-btn" onClick={handleClick}>
          View Work
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
