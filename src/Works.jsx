import { useState } from 'react';
import HeaderandFooter from './Components/HeaderandFooter';
import ProjectDetailModal from './Components/ProjectDetailModal';
import background2 from './assets/background2.png';

// Project Assets
import TrackED1 from './assets/TrackED1.png';
import TrackED2 from './assets/TrackED2.png';
import TrackED3 from './assets/TrackED3.png';
import TrackED4 from './assets/TrackED4.png';
import TrackED5 from './assets/TrackED5.png';

import Ctrl1 from './assets/Ctrl1.png';
import Ctrl2 from './assets/Ctrl2.png';
import Ctrl3 from './assets/Ctrl3.png';
import Ctrl4 from './assets/Ctrl4.png';
import CAD1 from './assets/CAD1.svg';
import CAD2 from './assets/CAD2.svg';
import CAD3 from './assets/CAD3.svg';

import POS1 from './assets/POS1.png';
import POS2 from './assets/POS2.png';
import POS3 from './assets/POS3.png';
import POS4 from './assets/POS4.png';
import POS5 from './assets/POS5.png';
import POS6 from './assets/POS6.jpg';

import Port1 from './assets/Port1.png';
import PortFigma from './assets/PortFigma.png';
import Port2 from './assets/Port2.png';
import Port3 from './assets/Port3.png';
import Port4 from './assets/Port4.png';
import PortD1 from './assets/PortD1.png';
import PortD2 from './assets/PortD2.png';

import GA1 from './assets/GA1.PNG';
import GA2 from './assets/GA2.PNG';
import GA3 from './assets/GA3.PNG';
import GA4 from './assets/GA4.PNG';

import PB1 from './assets/PB1.png';
import PB2 from './assets/PB2.png';

import TrainPA1 from './assets/TrainPA1.PNG';

import ILLUST1 from './assets/ILLUST1.png';
import ILLUST2 from './assets/ILLUST2.png';
import ILLUST3 from './assets/ILLUST3.jpeg';
import ILLUST4 from './assets/ILLUST4.png';
import ILLUST5 from './assets/ILLUST5.png';

import COMS1 from './assets/COMS1.mp4';

// Icons
import FilterIcon from './assets/Filter.svg';
import LayoutIcon from './assets/Layout.svg';
import ImageIcon from './assets/Image.svg';
import PixelArtIcon from './assets/PixelArt.svg';
import UIIcon from './assets/UIUX.svg';
import GraphicIcon from './assets/GraphicDesign.svg';
import FigmaIcon from './assets/Figma.svg';
import AdobeIllustratorIcon from './assets/AdobeIllustrator.svg';
import AdobePhotoshopIcon from './assets/AdobePhotoshop.svg';
import ProcreateIcon from './assets/Procreate.png';
import CanvaIcon from './assets/Canva.svg';
import AsepriteIcon from './assets/Aseprite.svg';
import ReactIcon from './assets/React.png';
import TailwindIcon from './assets/TailwindCSS.svg';
import HTMLIcon from './assets/HTML.svg';
import CSSIcon from './assets/CSS.svg';
import VSCodeIcon from './assets/VSCode.svg';

const projects = [
  {
    id: 1,
    title: "TrackED System",
    category: "ui",
    description: "Academic monitoring system for Cavite State University - Capstone Project",
    longDescription: `As Lead UI Designer and Frontend Developer for this capstone project, I led the design and development of TrackED a student academic tracking system for Cavite State University.

    Key Contributions:
    • Lead the UI design process from research to implementation
    • Conducted user research with my group to the students, faculty, and administrative staff
    • Created multiple design iterations that significantly improved my UI skills

    Outcomes:
    • Reduced administrative workload by 40% through streamlined processes
    • Improved data accuracy for student interventions by 35%
    • Enhanced my expertise in user-centered design and frontend development`,
    images: [TrackED1, TrackED2, TrackED3, TrackED4, TrackED5],
    image: TrackED1,
    tags: ["UI Design", "Frontend Development", "React.js", "Tailwind CSS", "Responsive Design", "HTML", "CSS"],
    programs: ["Figma", "React", "Tailwind CSS", "HTML", "CSS", "Visual Studio Code"],
    type: "Web Application"
  },
  {
    id: 2,
    title: "Retro Train Pixel Art",
    category: "digital-art",
    description: "Train Pixel art on a wheat fields",
    longDescription: "A detailed pixel art illustration capturing the charm of vintage steam locomotives. This piece focuses on texture, lighting, and atmospheric perspective to create a pleasing in the eyes scene. The limited color palette and details showcase technical precision in digital illustration techniques.",
    image: TrainPA1,
    tags: ["Pixel Art", "Digital Illustration", "Environment Art"],
    programs: ["Aseprite", "Procreate"],
    type: "Pixel Art"
  },
  {
    id: 3,
    title: "Pixel Art Commission",
    category: "digital-art",
    description: "Commissioned pixel art animation with parallax background effects",
    longDescription: `A commissioned pixel art animation project where I created a dynamic scene with advanced parallax background effects.

    Key Learnings:
    • Mastered parallax scrolling techniques for depth and immersion
    • Improved frame-by-frame animation timing and fluidity
    • Developed efficient workflow for layered animations in Aseprite

    Technical Skills:
    • Created multiple background layers for parallax effect
    • Implemented smooth character animations
    • Optimized color palettes for consistent visual style`,
    image: COMS1,
    images: [COMS1],
    tags: ["Pixel Art", "Animation", "Commission", "Parallax Effect", "Aseprite"],
    programs: ["Aseprite", "Procreate"],
    type: "Pixel Art Animation"
  },
  {
    id: 4,
    title: "NewJeans: The Game",
    category: "digital-art",
    description: "Pixel art game mockup featuring K-pop group NewJeans, as an RPG genre",
    longDescription: "Pixel-style game mockup inspired by NewJeans using Aseprite and Procreate. Focused on character design, sprite consistency, and color balance. This project strengthened my understanding of pixel art fundamentals and asset creation for game environments.",
    images: [GA1, GA2, GA3, GA4],
    image: GA1,
    tags: ["Game Mockup", "Pixel Art", "RPG", "Game UI"],
    programs: ["Aseprite", "Procreate"],
    type: "Game Mockup"
  },
  {
    id: 5,
    title: "Ctrl + Alt + Delight POS System",
    category: "ui",
    description: "Point of Sale system with custom product illustrations and intuitive workflow",
    longDescription: `As Lead UI Designer for this Point of Sale system, I designed an intuitive POS interface focused on streamlining online business operation.

    Key Design Achievements:
    • Designed complete POS system flow
    • Created custom illustrations for food and beverage products to enhance visual appeal
    • Developed intuitive dashboard for inventory management and sales analytics

    Skills Developed:
    • Enhanced illustration skills for product visualization
    • Improved understanding of online business operations and user needs
    • Created wireframes, prototypes, and final UI designs`,
    images: [CAD1, CAD2, CAD3, Ctrl1, Ctrl2, Ctrl3, Ctrl4],
    image: CAD1,
    tags: ["UI Design", "POS System", "Illustration", "Dashboard Design", "User Flow", "Figma", "HTML", "CSS"],
    programs: ["Figma", "Procreate", "HTML", "CSS", "Visual Studio Code"],
    type: "POS System"
  },
  {
    id: 6,
    title: "CvSU BITS PubMats",
    category: "posters",
    description: "Promotional materials created for Cavite State University - Imus Campus BITS organization",
    longDescription: `A collection of promotional materials (pubmats) created during my time as a creative in BITS (Builders of Innovative Technologist Society) at Cavite State University - Imus Campus.`,
    images: [PB1, PB2],
    image: PB1,
    tags: ["PubMats", "Promotional Materials", "Canva", "Adobe Photoshop", "Graphic Design", "University Events"],
    programs: ["Canva", "Adobe Photoshop"],
    type: "PubMats"
  },
  {
    id: 7,
    title: "Creative Poster Collection",
    category: "posters",
    description: "A series of creative posters showcasing Photoshop and Illustrator skills",
    longDescription: `A diverse collection of posters created to demonstrate my proficiency in Adobe Creative Suite.

    Design Techniques Demonstrated:
    • Advanced photo manipulation and compositing in Photoshop
    • Color theory application for different moods and themes
    • Layout composition and visual hierarchy principles

    Skills Highlighted:
    • Mastery of Photoshop layers, masks, and blending modes
    • Attention to detail in typography and visual elements`,
    images: [POS1, POS2, POS3, POS4, POS5, POS6],
    image: POS1,
    tags: ["Poster Design", "Adobe Photoshop", "Adobe Illustrator", "Typography", "Color Theory", "Digital Art"],
    programs: ["Adobe Photoshop", "Adobe Illustrator"],
    type: "Poster"
  },
  {
    id: 8,
    title: "3Minds Portfolio Website",
    category: "ui",
    description: "Academic group portfolio website project as Lead UI Designer",
    longDescription: `As Lead UI Designer for this academic group project, I designed and helped develop a responsive portfolio website for our 3-member team.

    Key Responsibilities:
    • Led the UI design process for a 3-person portfolio website
    • Created responsive layouts that work seamlessly across desktop and mobile devices
    • Designed cohesive visual identity and user experience for showcasing team projects

    Skills Developed:
    • Mastered responsive web design principles and implementation
    • Learned the fundamentals of React.js for component-based development
    • Applied Tailwind CSS for efficient and consistent styling
    • Gained experience in cross-browser compatibility and accessibility`,
    images: [PortD1, PortD2, PortFigma, Port1, Port2, Port3, Port4],
    image: PortD1,
    tags: ["UI Design", "Responsive Web Design", "React.js", "Tailwind CSS", "Portfolio Design", "Academic Project", "Group Project"],
    programs: ["Figma", "React", "Tailwind CSS", "HTML", "CSS", "Visual Studio Code"],
    type: "Website Design"
  },
  {
    id: 9,
    title: "Character Illustration",
    category: "digital-art",
    description: "Expressive character illustrations with vibrant color palettes",
    longDescription: "A collection of character illustrations exploring different styles, expressions, and color schemes. This project allowed me to experiment with various digital painting techniques and develop a cohesive visual language for character design.",
    images: [ILLUST1, ILLUST2, ILLUST3, ILLUST4, ILLUST5],
    image: ILLUST1,
    tags: ["Character Design", "Digital Painting", "Illustration", "Color Theory", "Expression"],
    programs: ["Procreate", "Adobe Photoshop"],
    type: "Illustration"
  }
];

const categoryIcons = {
  'all': FilterIcon,
  'ui': UIIcon,
  'posters': ImageIcon,
  'digital-art': GraphicIcon
};

const typeIcons = {
  'Poster': ImageIcon,
  'PubMats': ImageIcon,
  'Pixel Art': PixelArtIcon,
  'Illustration': ImageIcon,
  'Web Application': LayoutIcon,
  'Website Design': LayoutIcon,
  'UI Kit': UIIcon,
  'Mobile App': UIIcon,
  'Game Mockup': PixelArtIcon,
  'Pixel Art Animation': PixelArtIcon,
  'POS System': LayoutIcon
};

const programIcons = {
  'Figma': FigmaIcon,
  'Adobe Photoshop': AdobePhotoshopIcon,
  'Adobe Illustrator': AdobeIllustratorIcon,
  'Adobe XD': AdobeIllustratorIcon,
  'Procreate': ProcreateIcon,
  'Canva': CanvaIcon,
  'Aseprite': AsepriteIcon,
  'Visual Studio Code': VSCodeIcon,
  'React': ReactIcon,
  'React.js': ReactIcon,
  'Tailwind CSS': TailwindIcon,
  'HTML': HTMLIcon,
  'CSS': CSSIcon
};

const typeColors = {
  'Poster': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'PubMats': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Pixel Art': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Illustration': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Website Design': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Web Application': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'UI Kit': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  'Mobile App': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'Game Mockup': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Pixel Art Animation': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  'POS System': 'bg-amber-500/20 text-amber-300 border-amber-500/30'
};

const Icon = ({ icon: IconComponent, className = "w-5 h-5", white = false }) => {
  if (!IconComponent) return null;
  
  if (typeof IconComponent === 'string') {
    return (
      <img 
        src={IconComponent} 
        alt="icon" 
        className={`${className} ${white ? 'invert brightness-0' : ''}`}
      />
    );
  }
  
  return null;
};

const MediaRenderer = ({ src, alt, className, isThumbnail = false }) => {
  const isVideo = src?.toLowerCase().match(/\.(mp4|webm|mov|avi|mkv)$/i);
  
  if (isVideo) {
    return (
      <video
        src={src}
        className={className}
        muted
        loop
        playsInline
        autoPlay={isThumbnail}
        controls={!isThumbnail}
      >
        Your browser does not support the video tag.
      </video>
    );
  }
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ui', label: 'UI Design', count: projects.filter(p => p.category === 'ui').length },
    { id: 'posters', label: 'Posters & PubMats', count: projects.filter(p => p.category === 'posters').length },
    { id: 'digital-art', label: 'Digital Art', count: projects.filter(p => p.category === 'digital-art').length }
  ];

  return (
    <div
      className="min-h-screen overflow-auto text-white relative select-none"
      style={{ 
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url(${background2})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <HeaderandFooter />
      
      <div className="min-h-screen pt-16 pb-10 md:pt-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
              My Creative Works
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              A curated collection of my work across design disciplines. Click on any project to view detailed information.
            </p>
          </header>

          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="flex flex-col">
              <div className="block lg:hidden space-y-2 mb-6 md:mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => filterProjects(cat.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border transition-all duration-300 text-base font-medium ${
                      activeCategory === cat.id
                        ? 'bg-white/90 border-white text-gray-900 shadow-lg'
                        : 'bg-white/70 border-white/50 text-gray-700 hover:bg-white/80 hover:border-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon icon={categoryIcons[cat.id]} className="w-4 h-4" />
                      <span>{cat.label}</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-sm font-bold ${
                      activeCategory === cat.id 
                        ? 'bg-gray-500 text-white' 
                        : 'bg-gray-200 text-gray-900'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="hidden lg:flex flex-wrap gap-3 mb-6 md:mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => filterProjects(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-base ${
                      activeCategory === cat.id
                        ? 'bg-white/90 border-white text-gray-900 shadow-lg'
                        : 'bg-white/70 border-white/50 text-gray-700 hover:bg-white/80 hover:border-white'
                    }`}
                  >
                    <Icon icon={categoryIcons[cat.id]} className="w-4 h-4" />
                    <span>{cat.label}</span>
                    <span className={`px-2 py-1 rounded-full text-sm font-bold ${
                      activeCategory === cat.id 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-white-200 text-green-900'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="group bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/60 transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-xl flex flex-col h-full cursor-pointer"
              >
                <div className="relative flex-grow h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  <MediaRenderer
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    isThumbnail={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border ${typeColors[project.type]}`}>
                    <div className="flex items-center gap-1">
                      <Icon icon={typeIcons[project.type]} className="w-2 h-2 sm:w-3 sm:h-3" white />
                      <span className="font-bold whitespace-nowrap">{project.type}</span>
                    </div>
                  </span>
                </div>

                <div className="p-3 sm:p-4 flex-shrink-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors line-clamp-1 flex-grow">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 capitalize font-bold ml-2 flex-shrink-0">
                      <Icon icon={categoryIcons[project.category]} className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="hidden sm:inline">
                        {project.category === 'ui' ? 'UI Design' : 
                         project.category === 'digital-art' ? 'Digital Art' :
                         project.category === 'posters' ? 'Posters & PubMats' :
                         project.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {project.programs && project.programs.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1.5 items-center">
                        <span className="text-xs font-bold text-gray-600 mr-1">Tools:</span>
                        {project.programs.slice(0, 3).map((program, index) => (
                          <div key={index} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full border border-gray-200">
                            <Icon icon={programIcons[program]} className="w-3 h-3" />
                            <span className="text-xs font-bold text-gray-900 whitespace-nowrap">
                              {program}
                            </span>
                          </div>
                        ))}
                        {project.programs.length > 3 && (
                          <span className="px-2 py-1 bg-gray-200 rounded-full text-xs font-bold text-gray-700">
                            +{project.programs.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-900 border border-gray-200 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs font-bold text-gray-700">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <div className="text-white/60 text-lg sm:text-xl md:text-2xl mb-4">
                No projects found in this category
              </div>
              <button
                onClick={() => filterProjects('all')}
                className="px-6 py-3 bg-white/80 text-gray-900 rounded-full font-bold hover:bg-white transition-all duration-300"
              >
                View All Projects
              </button>
            </div>
          )}

        </div>
      </div>

      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={handleCloseModal}
          typeColors={typeColors}
          categoryIcons={categoryIcons}
          programIcons={programIcons}
          MediaRenderer={MediaRenderer}
        />
      )}
    </div>
  );
}