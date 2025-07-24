
import { Link } from 'react-router';
import bannerImage from '../../public/nguy-n-hi-p-2rNHliX6XHk-unsplash.jpg'


const Banner = () => {
  return (
     <div
      className="hero min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url("${bannerImage}")` }}
    >
        <img src={bannerImage} alt="test" className="w-full h-140" />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500">
            Donate Blood, Save Lives
          </h1>
          <p className="py-4">
            Your donation can give someone another chance at life. Be a hero by giving blood today.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link to="/register" className="btn btn-error text-white">
              Become a Donor
            </Link>
            <Link to="/about" className="btn btn-outline text-white border-white hover:bg-white hover:text-red-500">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
