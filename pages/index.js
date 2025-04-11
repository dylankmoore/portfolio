/* eslint-disable @next/next/no-img-element */
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
        <title>Dylan Moore | Full Stack Developer</title>
      </Head>
      <div className="home-wrapper">
        <img
          src="/dkm.png"
          alt="Dylan Moore Logo"
          width={300}
          height={100}
        />
        <p className="subtitle">Full Stack Software Developer</p>
        <button type="button" className="view-work-btn" onClick={handleClick}>
          View Work
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
