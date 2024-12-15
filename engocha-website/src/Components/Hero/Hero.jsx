import './Hero.css' 
import Injera from '../../assets/injera.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center z-0" 
      style={{
        backgroundImage: `url(${Injera})`, 
        filter: 'brightness(0.6)' // Slightly darken image for text readability
      }}
    />
    
    {/* Content Overlay */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Engocha
          <span className="block text-xl md:text-2xl mt-2 font-light opacity-80">
            Authentic Ethiopian Catering Experience
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Bringing the rich flavors of Ethiopia to your special occasions. 
          Traditional injera, vibrant wot, and exceptional catering services.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Link 
            to="/menu" 
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 transition-colors duration-300 rounded-lg text-white font-semibold"
          >
            View Menu
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg text-white"
          >
            Book Catering
          </Link>
        </div>
      </div>
    </div>
  </div>
);
};


export default Hero
