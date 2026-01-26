import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const ProjectDetailModal = ({ project, onClose, typeColors, categoryIcons, programIcons, MediaRenderer }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVideoControls, setShowVideoControls] = useState(false);
  
  const images = project.images || [project.image];
  const programs = project.programs || [];
  const slideIntervalRef = useRef(null);
  const videoRefs = useRef([]);
  const autoSlideTimeout = 3000; // 3 seconds

  // Animation and slideshow effects
  useEffect(() => {
    // Trigger opening animation
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto slide functionality for multiple images
  useEffect(() => {
    if (images.length > 1 && isModalOpen) {
      // Clear existing interval
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
      
      // Set up new interval
      slideIntervalRef.current = setInterval(() => {
        // Check if current media is a video
        const currentMedia = images[currentImageIndex];
        const isCurrentVideo = typeof currentMedia === 'string' && 
          currentMedia.toLowerCase().match(/\.(mp4|webm|mov|avi|mkv)$/i);
        
        // Only auto-slide if not a video or if video is not playing
        if (!isCurrentVideo || !isPlaying) {
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
      }, autoSlideTimeout);
      
      return () => {
        if (slideIntervalRef.current) {
          clearInterval(slideIntervalRef.current);
        }
      };
    }
  }, [currentImageIndex, isModalOpen, images.length, isPlaying]);

  // Handle video state for current index
  useEffect(() => {
    const currentMedia = images[currentImageIndex];
    const isCurrentVideo = typeof currentMedia === 'string' && 
      currentMedia.toLowerCase().match(/\.(mp4|webm|mov|avi|mkv)$/i);
    
    if (isCurrentVideo && videoRefs.current[currentImageIndex]) {
      if (isPlaying) {
        videoRefs.current[currentImageIndex].play();
      } else {
        videoRefs.current[currentImageIndex].pause();
      }
      
      videoRefs.current[currentImageIndex].muted = isMuted;
    }
  }, [currentImageIndex, isPlaying, isMuted]);

  // Get current media type
  const getCurrentMediaType = () => {
    const currentMedia = images[currentImageIndex];
    if (typeof currentMedia === 'string') {
      return currentMedia.toLowerCase().match(/\.(mp4|webm|mov|avi|mkv)$/i) ? 'video' : 'image';
    }
    return 'image';
  };

  // Handle video play/pause
  const handleVideoPlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowVideoControls(true);
    
    // Hide controls after 3 seconds
    setTimeout(() => {
      setShowVideoControls(false);
    }, 3000);
  };

  // Handle video mute/unmute
  const handleVideoMute = () => {
    setIsMuted(!isMuted);
    setShowVideoControls(true);
    
    // Hide controls after 3 seconds
    setTimeout(() => {
      setShowVideoControls(false);
    }, 3000);
  };

  // Get current image description or use project description
  const getCurrentDescription = () => {
    if (images[currentImageIndex]?.description) {
      return images[currentImageIndex].description;
    }
    return project.longDescription || project.description;
  };

  // Format description with line breaks and sections
  const formatDescription = (text) => {
    if (!text) return '';
    
    if (text.includes('**') || text.includes('•')) {
      return text.split('\n\n').map((paragraph, index) => {
        if (paragraph.includes('**') && paragraph.includes(':')) {
          const cleanText = paragraph.replace(/\*\*/g, '');
          return (
            <h4 key={index} className="font-bold text-white mt-4 mb-3 text-base">
              {cleanText}
            </h4>
          );
        }
        
        if (paragraph.includes('•')) {
          const lines = paragraph.split('\n');
          return (
            <div key={index} className="mb-3">
              {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex items-start mb-2 ml-1">
                  <span className="mr-2 text-gray-400">•</span>
                  <span className="flex-1">{line.replace('•', '').trim()}</span>
                </div>
              ))}
            </div>
          );
        }
        
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {paragraph}
          </p>
        );
      });
    }
    
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed last:mb-0">
        {paragraph}
      </p>
    ));
  };

  const nextImage = () => {
    setIsPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIsPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle manual image navigation
  const handleManualImageChange = (index) => {
    setIsPlaying(false);
    setCurrentImageIndex(index);
  };

  // Get video ref
  const setVideoRef = (index, ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        isModalOpen ? 'bg-black/80 opacity-100' : 'bg-black/0 opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className={`relative w-full h-full max-w-7xl max-h-[95vh] mx-4 flex flex-col items-center justify-center p-2 md:p-8 transition-all duration-500 ${
          isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-50 p-2 bg-black/50 text-white hover:bg-black/70 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-105 ${
            isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Image Container - Left/Top on mobile */}
          <div className="relative w-full lg:w-2/3 h-2/3 lg:h-full flex flex-col items-center justify-center">
            {/* Title - Mobile */}
            <div className={`lg:hidden w-full mb-3 flex justify-center transition-all duration-500 ${
              isModalOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}>
              <h2 className="text-xl font-semibold text-white break-words text-center px-4">
                {project.title}
              </h2>
            </div>
            
            <div className={`relative w-full h-full max-w-4xl flex items-center justify-center bg-gray-900/30 rounded-lg overflow-hidden transition-all duration-700 ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <MediaRenderer
                src={typeof images[currentImageIndex] === 'string' ? images[currentImageIndex] : images[currentImageIndex]?.url || images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain p-4"
                isThumbnail={false}
                onVideoRef={(ref) => setVideoRef(currentImageIndex, ref)}
              />
              
              {/* Video Controls Overlay */}
              {getCurrentMediaType() === 'video' && (
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 backdrop-blur-sm bg-black/70 px-4 py-2 rounded-full border border-white/20 transition-all duration-300 ${
                  showVideoControls ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <button
                    onClick={handleVideoPlayPause}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white" />
                    )}
                  </button>
                  
                  <button
                    onClick={handleVideoMute}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-105 ${
                    isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                  }`}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-black/70 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-105 ${
                    isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                  }`}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className={`absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 backdrop-blur-sm bg-black/70 px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/20 transition-all duration-500 ${
                isModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="flex gap-1">
                  {images.map((_, index) => {
                    const mediaType = typeof images[index] === 'string' ? 
                      (images[index].toLowerCase().match(/\.(mp4|webm|mov|avi|mkv)$/i) ? 'video' : 'image') : 'image';
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleManualImageChange(index)}
                        className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to ${mediaType} ${index + 1}`}
                      >
                        {mediaType === 'video' && index !== currentImageIndex && (
                          <div className="w-1 h-1 bg-black/50 rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Image Counter Text */}
            {images.length > 1 && (
              <div className={`absolute bottom-2 md:bottom-4 right-4 z-20 backdrop-blur-sm bg-black/70 px-3 py-1 rounded-full text-xs text-white/90 border border-white/20 flex items-center gap-1 transition-all duration-500 ${
                isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}>
                <span className="font-medium">
                  {currentImageIndex + 1}
                </span>
                <span className="text-white/60">/</span>
                <span>{images.length}</span>
              </div>
            )}
          </div>

          {/* Description Container - Right/Bottom */}
          <div className={`w-full lg:w-1/3 h-1/3 lg:h-full flex flex-col bg-black/60 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 overflow-hidden transition-all duration-700 ${
            isModalOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            {/* Title - Desktop */}
            <div className={`hidden lg:block mb-4 transition-all duration-500 ${
              isModalOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}>
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold text-white break-words mr-2">
                  {project.title}
                </h2>
                {typeColors && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
                    typeColors[project.type] || 'bg-white/20 text-white border-white/20'
                  } ${isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                    {project.type}
                  </span>
                )}
              </div>
            </div>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <h3 className={`text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 transition-all duration-500 ${
                isModalOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}>
                Project Details:
              </h3>
              <div className={`text-sm md:text-base text-gray-200 leading-relaxed transition-all duration-700 ${
                isModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {formatDescription(getCurrentDescription())}
              </div>

              {/* Program Used Section */}
              {programs.length > 0 && (
                <div className={`mt-6 pt-6 border-t border-white/20 transition-all duration-500 ${
                  isModalOpen ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
                }`}>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                    Technologies & Tools:
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {programs.map((program, index) => {
                      const icon = programIcons?.[program];
                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 text-white rounded-full text-xs md:text-sm backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${
                            isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                          }`}
                          style={{ transitionDelay: `${index * 50}ms` }}
                          title={program}
                        >
                          {icon && (
                            <img 
                              src={icon} 
                              alt={program}
                              className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
                            />
                          )}
                          <span className="truncate max-w-[120px]">{program}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Skills/Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className={`mt-6 pt-6 border-t border-white/20 transition-all duration-500 ${
                  isModalOpen ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
                }`}>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                    Skills Demonstrated:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 bg-white/10 text-white rounded-full text-xs backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                          isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 30}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;