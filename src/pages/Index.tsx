import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  

  const projects = [
    {
      title: "Game Control using Hand Gesture",
      description: "Deep learning model to control games via hand gestures using Python and OpenCV for real-time gesture recognition.",
      tech: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
      year: "2024",
      image: ".././images/game-controlling-using-hand-gestures-1.png",
      githubUrl: "https://github.com/sundereshp/gesturehand"
    },
    {
      title: "Tamil Auto Sentence Completion",
      description: "Hybrid deep learning model using LSTM and Transformer for Tamil language auto text completion with PyTorch.",
      tech: ["PyTorch", "LSTM", "Transformer", "NLP", "Tamil Language"],
      year: "2025",
      image: ".././images/images.jpeg",
      githubUrl: "https://github.com/sundereshp/tamil-auto-complete"
    },
    {
      title: "Task Manager Web Application",
      description: "Web-based task manager using Node.js and React.js for efficient task creation and organization.",
      tech: ["Node.js", "React.js", "MongoDB", "Express"],
      year: "2025",
      image: ".././images/Screenshot 2025-05-26 111950.png",
      githubUrl: "https://github.com/sundereshp/taskapplicatoin"
    },
    {
      title: "Desktop Activity Tracker",
      description: "Electron-based desktop application for monitoring user activity with global keystroke and mouse tracking.",
      tech: ["Electron", "JavaScript", "Node.js", "Desktop Development"],
      year: "2025",
      image: ".././images/Screenshot 2025-05-26 113601.png",
      githubUrl: "https://github.com/sundereshp/desapp"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SP
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full hover:bg-white/20"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-md bg-white/95 dark:bg-gray-900/95 border-b border-white/20">
            <div className="px-4 py-4 space-y-4">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              SUNDERESH P
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300 font-light">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Building powerful apps with clean code. Passionate about AI/ML and creating innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://drive.google.com/file/d/1Tw_2U5eXVPeLQZWdGsbcvazr9xPXccgf/view?usp=sharing', '_blank')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/sundereshp" className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/sunderesh-p-598928232/" className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="mailto:sundereshp@gmail.com" className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="tel:+91 7305011639" className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-8 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Current Role</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="font-semibold text-blue-600">Software Development Intern</span> at GrinfoTech (Feb 2025 - Present)<br/>
                  Developing web applications and desktop solutions using modern technologies.
                </p>
              </Card>
              <Card className="p-8 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Languages Known</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Tamil</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">• Native</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">English</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">• Professional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Hindi</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">• Conversational</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Telugu</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">• Native</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-8 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">B.Tech CSE with AI/ML Specialization</h4>
                    <p className="text-gray-600 dark:text-gray-400">Vellore Institute of Technology - Chennai</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2021 - 2025</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Higher Secondary (XII)</h4>
                    <p className="text-gray-600 dark:text-gray-400">Narayana E-techno Pallavaram</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2020 - 2021</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Senior Secondary (XII)</h4>
                    <p className="text-gray-600 dark:text-gray-400">Narayana E-techno Pallavaram</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2019 - 2020</p>
                  </div>
                </div>
              </Card>

              

              <Card className="p-8 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Certifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Amazon Cloud Practitioner (2023)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Google Cloud Digital Leader (2023)</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to a placeholder image if the original fails to load
                      e.currentTarget.src = './images/placeholder.png';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {project.year}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2" onClick={() => window.open(project.githubUrl, '_blank')}>
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Programming Languages</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Python', 'Java', 'C', 'C++', 'R', 'MySQL', 'JavaScript'].map((skill, index) => (
                  <div 
                    key={index} 
                    className="relative group overflow-hidden rounded-lg p-4 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border-l-4 border-blue-600 pl-4
                    hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10
                    transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Web Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Flask', 'MongoDB', 'Express'].map((skill, index) => (
                  <div 
                    key={index} 
                    className="relative group overflow-hidden rounded-r-lg p-4 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border-l-4 border-purple-600 pl-4
                    hover:bg-white/20 hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-blue-500/10
                    transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Flexibility', 'Decision-making', 'Adaptability', 'Problem Solving', 'Teamwork', 'Communication', 'Time Management'].map((skill, index) => (
                  <div 
                    key={index} 
                    className="relative group overflow-hidden rounded-r-lg p-4 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border-l-4 border-blue-500 pl-4
                    hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10
                    transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Ready to create something amazing together? Let's talk!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Email</h3>
              <a href="mailto:sundereshp@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                sundereshp@gmail.com
              </a>
            </Card>
            
            <Card className="p-8 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Phone</h3>
              <a href="tel:+91 7305011639" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                +91 7305011639
              </a>
            </Card>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/sundereshp" className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sunderesh-p-598928232/" className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg">
              <Linkedin className="w-6 h-6" />
            </a>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            2025 Sunderesh P. Building the future, one line of code at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
