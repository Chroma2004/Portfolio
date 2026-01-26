import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CVModal from '../Components/CVModal';
import { Menu, X } from 'lucide-react';
import background2 from '../assets/background2.png';

export default function HeaderandFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu when opening modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    if (!isAnimating) {
      if (!isMobileMenuOpen) {
        // Opening animation
        setIsMobileMenuOpen(true);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
      } else {
        // Closing animation
        setIsAnimating(true);
        setTimeout(() => {
          setIsMobileMenuOpen(false);
          setIsAnimating(false);
        }, 300);
      }
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container') && !event.target.closest('.menu-button')) {
        toggleMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex-shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <p className="text-white text-xl sm:text-2xl font-bold font-akshar tracking-tight cursor-pointer hover:text-orange-300 transition-colors">
              Chroma<span className="text-orange-400">.</span>
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <Link to="/" className="text-white text-base lg:text-lg font-bold font-akshar tracking-tight relative group cursor-pointer">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/works" className="text-white text-base lg:text-lg font-bold font-akshar tracking-tight relative group cursor-pointer">
              <span className="relative z-10">Works</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button 
              onClick={openModal}
              className="text-white text-base lg:text-lg font-bold font-akshar tracking-tight relative group cursor-pointer"
            >
              <span className="relative z-10">About me</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 focus:outline-none menu-button transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-0" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300 rotate-0" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden mobile-menu-container fixed inset-0 z-40 transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}>
          {/* Background Overlay */}
          <div 
            className={`absolute inset-0 transition-all duration-500 ${
              isMobileMenuOpen 
                ? 'backdrop-blur-md bg-black/40' 
                : 'backdrop-blur-0 bg-black/0'
            }`}
            onClick={toggleMobileMenu}
          />
          
          {/* Menu Content */}
          <div 
            className={`absolute inset-0 pt-16 transition-all duration-500 ease-out ${
              isMobileMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-4 opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${background2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Menu Items Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8">
              {/* Home Link */}
              <div 
                className={`transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? '100ms' : '0ms' }}
              >
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-2xl sm:text-3xl font-bold font-akshar tracking-tight relative group cursor-pointer py-2 px-4 block"
                >
                  <span className="relative z-10 hover:text-orange-300 transition-colors duration-300">Home<span className="text-orange-400">.</span></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
              
              {/* Works Link */}
              <div 
                className={`transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? '200ms' : '0ms' }}
              >
                <Link 
                  to="/works" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-2xl sm:text-3xl font-bold font-akshar tracking-tight relative group cursor-pointer py-2 px-4 block"
                >
                  <span className="relative z-10 hover:text-orange-300 transition-colors duration-300">Works<span className="text-orange-400">.</span></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
              
              {/* About Me Button */}
              <div 
                className={`transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}
              >
                <button 
                  onClick={openModal}
                  className="text-white text-2xl sm:text-3xl font-bold font-akshar tracking-tight relative group cursor-pointer py-2 px-4"
                >
                  <span className="relative z-10 hover:text-orange-300 transition-colors duration-300">About me<span className="text-orange-400">.</span></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CVModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}