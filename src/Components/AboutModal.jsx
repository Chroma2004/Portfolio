import { useEffect, useCallback } from 'react';
import CloseIcon from '../assets/close.svg';
import AboutMeIcon from '../assets/User.svg';
import DesignIcon from '../assets/design.svg';
import CodeIcon from '../assets/code.svg';
import ArtIcon from '../assets/palette.svg';
import EducationIcon from '../assets/GraduationCap.svg';
import LocationIcon from '../assets/MapPin.svg';
import EmailIcon from '../assets/mail.svg';
import CVIcon from '../assets/file-text.svg';
import ProfilePhoto from '../assets/Profile.png';

// Software icons
import FigmaIcon from '../assets/Figma.svg';
import PhotoshopIcon from '../assets/AdobePhotoshop.svg';
import IllustratorIcon from '../assets/AdobeIllustrator.svg';
import CapcutIcon from '../assets/video.svg';
import CanvaIcon from '../assets/Canva.svg';
import ProcreateIcon from '../assets/Procreate.png';
import AsepriteIcon from '../assets/Aseprite.svg';
import ReactIcon from '../assets/React.png';

export default function AboutModal({ isOpen, onClose, onOpenCV }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  const handleViewCV = () => {
    onClose();
    onOpenCV();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-2 sm:p-4 bg-black/20 transition-opacity duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="About Me Modal"
    >
      <div 
        className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Content Card */}
        <div 
          className="bg-white shadow-2xl rounded-2xl relative overflow-hidden animate-paper-open
            w-[95vw] max-w-[95vw] h-auto max-h-[80vh]
            sm:w-[90vw] sm:max-w-[90vw] sm:max-h-[85vh]
            md:w-[80vw] md:max-w-[80vw] md:max-h-[85vh]
            lg:w-[70vw] lg:max-w-[70vw] lg:max-h-[90vh]
            border border-gray-200"
        >
          {/* Header */}
          <div className="relative">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-lg shadow-lg">
                  <img src={AboutMeIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sofia-condensed tracking-tight">
                  About Me
                </h2>
              </div>
              
              {/* Close button - top right small */}
              <button
                onClick={onClose}
                className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-lg shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Close modal"
              >
                <img src={CloseIcon} alt="Close" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(80vh-80px)] sm:max-h-[calc(85vh-80px)]">
            <div className="space-y-10">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
                {/* Profile Photo */}
                <div className="relative group">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 border-white shadow-2xl ring-2 ring-orange-500/30">
                    <img 
                      src={ProfilePhoto} 
                      alt="Michael Rhoi Gonzales" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                    UI/UX Designer
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-sofia-condensed mb-2">
                        Michael Rhoi Gonzales
                      </h2>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 font-akshar">
                        Creative Designer & Frontend Developer
                      </h3>
                    </div>
                    
                    {/* View CV button moved to header row */}
                    <button
                      onClick={handleViewCV}
                      className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white rounded-full px-5 py-3 font-bold font-akshar tracking-tight shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 text-sm sm:text-base whitespace-nowrap"
                      aria-label="View CV"
                    >
                      <img src={CVIcon} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>View CV</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <img src={LocationIcon} alt="Location" className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Cavite, Philippines</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <img src={EducationIcon} alt="Education" className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">Cavite State University - Imus Campus</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <img src={EmailIcon} alt="Email" className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">michaelrhoigonzales@gmail.com</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed font-akshar text-lg border-l-4 border-orange-400 pl-4 py-2 bg-orange-50">
                    Passionate designer and developer specializing in creating visually compelling interfaces 
                    and digital experiences that blend aesthetics with functionality. Currently studying while 
                    building practical skills through real-world projects.
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* UI/UX Design Card */}
                <div className="group relative overflow-hidden rounded-xl border border-orange-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
                  <div className="absolute top-0 left-0 h-1 w-full bg-orange-500" />
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-orange-500 rounded-xl shadow-lg">
                      <img src={DesignIcon} alt="" className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl">UI/UX Design</h4>
                  </div>
                  <ul className="space-y-3">
                    {['Wireframing & Prototyping', 'User Research & Testing', 'Responsive Design', 'Design Systems'].map((skill, index) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-3 flex h-2 w-2 items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                        </div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Development Card */}
                <div className="group relative overflow-hidden rounded-xl border border-blue-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
                  <div className="absolute top-0 left-0 h-1 w-full bg-blue-500" />
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-blue-500 rounded-xl shadow-lg">
                      <img src={CodeIcon} alt="" className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl">Development</h4>
                  </div>
                  <ul className="space-y-3">
                    {['React.js, JavaScript', 'Tailwind CSS, HTML5/CSS3', 'Responsive Web Design', 'Git Version Control'].map((skill, index) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-3 flex h-2 w-2 items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        </div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Digital Art Card */}
                <div className="group relative overflow-hidden rounded-xl border border-purple-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
                  <div className="absolute top-0 left-0 h-1 w-full bg-purple-500" />
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-purple-500 rounded-xl shadow-lg">
                      <img src={ArtIcon} alt="" className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl">Digital Art</h4>
                  </div>
                  <ul className="space-y-3">
                    {['Pixel Art & Illustration', 'Character Design', 'Digital Painting', 'Graphic Design'].map((skill, index) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-3 flex h-2 w-2 items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                        </div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Software Proficiency */}
              <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-white p-8 shadow-lg">
                <h4 className="font-bold text-gray-900 text-2xl mb-8 flex items-center gap-3">
                  <div className="h-1 w-8 bg-orange-500" />
                  Software Proficiency
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[
                    { icon: FigmaIcon, name: 'Figma', category: 'UI/UX Design', bg: 'bg-purple-100' },
                    { icon: PhotoshopIcon, name: 'Photoshop', category: 'Photo Editing', bg: 'bg-orange-100' },
                    { icon: IllustratorIcon, name: 'Illustrator', category: 'Vector Graphics', bg: 'bg-orange-100' },
                    { icon: CapcutIcon, name: 'CapCut', category: 'Video Editing', bg: 'bg-orange-200' },
                    { icon: CanvaIcon, name: 'Canva', category: 'Graphic Design', bg: 'bg-cyan-100' },
                    { icon: ProcreateIcon, name: 'Procreate', category: 'Digital Art', bg: 'bg-red-100' },
                    { icon: AsepriteIcon, name: 'Aseprite', category: 'Pixel Art', bg: 'bg-purple-200' },
                    { icon: ReactIcon, name: 'React.js', category: 'Frontend Dev', bg: 'bg-cyan-100' },
                  ].map((software, index) => (
                    <div 
                      key={index}
                      className="group relative flex flex-col items-center p-5 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:border-orange-200 hover:scale-105 transition-all duration-300"
                    >
                      <div className={`absolute inset-0 ${software.bg} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity`} />
                      <div className="p-3 bg-gray-50 rounded-lg shadow-inner mb-4">
                        <img src={software.icon} alt={software.name} className="w-10 h-10 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="font-bold text-gray-900 text-base mb-1">{software.name}</span>
                      <span className="text-xs text-gray-600 font-medium">{software.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack - Improved mobile alignment */}
              <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-white p-6 sm:p-8 shadow-lg">
                <h4 className="font-bold text-gray-900 text-2xl mb-6 sm:mb-8 flex items-center gap-3">
                  <div className="h-1 w-8 bg-orange-500" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                  {[
                    { name: 'React.js', bg: 'bg-orange-500', border: 'border-orange-200' },
                    { name: 'Tailwind CSS', bg: 'bg-cyan-500', border: 'border-cyan-200' },
                    { name: 'HTML5', bg: 'bg-red-500', border: 'border-red-200' },
                    { name: 'CSS3', bg: 'bg-orange-600', border: 'border-orange-200' },
                    { name: 'JavaScript', bg: 'bg-yellow-500', border: 'border-yellow-200' },
                    { name: 'Git/GitHub', bg: 'bg-gray-700', border: 'border-gray-300' },
                    { name: 'Figma', bg: 'bg-purple-500', border: 'border-purple-200' },
                    { name: 'Adobe Suite', bg: 'bg-pink-500', border: 'border-pink-200' },
                  ].map((tech, index) => (
                    <span 
                      key={index}
                      className={`inline-flex items-center justify-center px-3 py-2 sm:px-5 sm:py-2.5 ${tech.bg} text-white rounded-full text-xs sm:text-sm font-bold border ${tech.border} shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default whitespace-nowrap`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes paperOpen {
          0% { 
            transform: translateY(-20px) scale(0.95); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
        }
        
        .animate-paper-open {
          animation: paperOpen 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        /* Custom scrollbar */
        .max-h-\[calc\(80vh-80px\)\]::-webkit-scrollbar {
          width: 8px;
        }
        
        .max-h-\[calc\(80vh-80px\)\]::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 10px;
        }
        
        .max-h-\[calc\(80vh-80px\)\]::-webkit-scrollbar-thumb {
          background: #fb923c;
          border-radius: 10px;
          border: 2px solid #f8fafc;
        }
        
        .max-h-\[calc\(80vh-80px\)\]::-webkit-scrollbar-thumb:hover {
          background: #f97316;
        }
      `}</style>
    </div>
  );
}