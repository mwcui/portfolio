import AspectRatio from './Components/aspectratio';
import Image from 'next/image';
import logo from '/public/logo.svg'
import Navbar from './Components/navbar';

const Home = () => {
  return (
    <div className="bg-[#0C3B65] min-h-screen flex items-center justify-center">
      <Navbar />
      {/* <AspectRatio> */}
        <Image src={logo} alt="Logo" width={300} height={300} className="object-contain" />
      {/* </AspectRatio> */}
    </div>
  );
};

export default Home;
