// Next.js Interactive Resume with Light/Dark Theme
// Features: Skills, Projects, Portfolio, Contact Form, Analytics

"use client";

import { useState, useEffect, ReactNode } from 'react';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiUser, FiChevronDown, FiChevronUp, FiAward, FiHeart, FiHome, FiCalendar, FiBriefcase, FiCloud, FiServer, FiMonitor, FiCpu, FiCode, FiDatabase, FiLayers, FiX, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// Define types for portfolio projects
interface Technology {
  name: string;
  bgColor: string;
  textColor: string;
}

interface PortfolioProject {
  title: string;
  description: string;
  icon: ReactNode;
  technologies: Technology[];
  demoLink: string;
  demoType: 'external' | 'modal';
  demoContent?: {
    images?: string[];
    description: string;
    features: string[];
  };
  githubLink?: string;
}

// Define types for skills
interface Skill {
  name: string;
  icon: ReactNode;
  level: number; // 1-5
  bgColor: string;
}

export default function Resume() {
    // Initialize darkMode based on system preference
    const [darkMode, setDarkMode] = useState(false);
    const [aboutExpanded, setAboutExpanded] = useState(false);
    const [activeDemo, setActiveDemo] = useState<string | null>(null);
    
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formError, setFormError] = useState<string | null>(null);
    
    // Skills data
    const skills: Skill[] = [
        { name: "AWS", icon: <FiCloud size={18} />, level: 4, bgColor: "bg-blue-500" },
        { name: "Python", icon: <FiCode size={18} />, level: 4, bgColor: "bg-green-500" },
        { name: "JavaScript", icon: <FiCode size={18} />, level: 3, bgColor: "bg-yellow-500" },
        { name: "React", icon: <FiMonitor size={18} />, level: 3, bgColor: "bg-blue-400" },
        { name: "Next.js", icon: <FiServer size={18} />, level: 3, bgColor: "bg-black" },
        { name: "IoT", icon: <FiCpu size={18} />, level: 4, bgColor: "bg-red-500" },
        { name: "AI Development", icon: <FiDatabase size={18} />, level: 3, bgColor: "bg-purple-500" },
        { name: "Cloud Infrastructure", icon: <FiLayers size={18} />, level: 4, bgColor: "bg-indigo-500" }
    ];
    
    // Portfolio projects data
    const portfolioProjects: PortfolioProject[] = [
        {
            title: "AWS Cloud Infrastructure",
            description: "Designed and implemented scalable cloud infrastructure using AWS services including EC2, S3, and Lambda.",
            icon: <FiCloud className="text-blue-500" size={20} />,
            technologies: [
                { name: "AWS", bgColor: "bg-blue-100 dark:bg-blue-900", textColor: "text-blue-800 dark:text-blue-100" },
                { name: "Terraform", bgColor: "bg-purple-100 dark:bg-purple-900", textColor: "text-purple-800 dark:text-purple-100" },
                { name: "CloudFormation", bgColor: "bg-orange-100 dark:bg-orange-900", textColor: "text-orange-800 dark:text-orange-100" }
            ],
            demoLink: "aws-cloud-infrastructure",
            demoType: "modal",
            demoContent: {
                images: ["/aws-demo.png"],
                description: "A comprehensive cloud infrastructure solution built on AWS, featuring auto-scaling EC2 instances, S3 storage, and serverless Lambda functions.",
                features: [
                    "Auto-scaling EC2 instances for dynamic workloads",
                    "S3 buckets for secure and durable storage",
                    "Lambda functions for serverless computing",
                    "CloudFormation templates for infrastructure as code",
                    "VPC configuration with public and private subnets"
                ]
            },
            githubLink: "https://github.com/SyntaxMarfin"
        },
        {
            title: "IoT Monitoring System",
            description: "Developed an IoT system for monitoring environmental conditions using sensors and cloud connectivity.",
            icon: <FiCpu className="text-green-500" size={20} />,
            technologies: [
                { name: "Python", bgColor: "bg-green-100 dark:bg-green-900", textColor: "text-green-800 dark:text-green-100" },
                { name: "Raspberry Pi", bgColor: "bg-red-100 dark:bg-red-900", textColor: "text-red-800 dark:text-red-100" },
                { name: "MQTT", bgColor: "bg-yellow-100 dark:bg-yellow-900", textColor: "text-yellow-800 dark:text-yellow-100" }
            ],
            demoLink: "iot-monitoring",
            demoType: "modal",
            demoContent: {
                images: ["/iot-demo.png"],
                description: "An IoT monitoring system that collects environmental data from sensors and transmits it to the cloud for analysis and visualization.",
                features: [
                    "Temperature, humidity, and light sensors",
                    "Real-time data collection and transmission",
                    "MQTT protocol for efficient communication",
                    "Cloud-based data storage and analysis",
                    "Mobile-friendly dashboard for monitoring"
                ]
            },
            githubLink: "https://github.com/SyntaxMarfin"
        },
        {
            title: "AI-Powered Web Application",
            description: "Created a web application that leverages AI for data analysis and visualization.",
            icon: <FiServer className="text-purple-500" size={20} />,
            technologies: [
                { name: "React", bgColor: "bg-blue-100 dark:bg-blue-900", textColor: "text-blue-800 dark:text-blue-100" },
                { name: "Node.js", bgColor: "bg-green-100 dark:bg-green-900", textColor: "text-green-800 dark:text-green-100" },
                { name: "TensorFlow", bgColor: "bg-orange-100 dark:bg-orange-900", textColor: "text-orange-800 dark:text-orange-100" }
            ],
            demoLink: "ai-web-app",
            demoType: "modal",
            demoContent: {
                images: ["/ai-demo.png"],
                description: "A web application that uses AI to analyze data and provide insights through interactive visualizations.",
                features: [
                    "AI-powered data analysis",
                    "Interactive data visualizations",
                    "User-friendly interface",
                    "Real-time processing",
                    "Customizable dashboards"
                ]
            },
            githubLink: "https://github.com/SyntaxMarfin"
        },
        {
            title: "Interactive Resume",
            description: "Designed and developed an interactive resume website using Next.js and Tailwind CSS.",
            icon: <FiMonitor className="text-indigo-500" size={20} />,
            technologies: [
                { name: "Next.js", bgColor: "bg-black dark:bg-gray-800", textColor: "text-white" },
                { name: "Tailwind CSS", bgColor: "bg-blue-100 dark:bg-blue-900", textColor: "text-blue-800 dark:text-blue-100" },
                { name: "TypeScript", bgColor: "bg-blue-100 dark:bg-blue-900", textColor: "text-blue-800 dark:text-blue-100" }
            ],
            demoLink: "/",
            demoType: "external",
            githubLink: "https://github.com/SyntaxMarfin"
        }
    ];
    
    // Set initial theme based on system preference
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(isDarkMode);
            
            // Apply theme class to document
            document.documentElement.classList.toggle('dark', isDarkMode);
        }
    }, []);
    
    // Toggle theme function
    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        
        // Apply theme class to document
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', newDarkMode);
        }
    };

    // Toggle about section expansion
    const toggleAbout = () => {
        setAboutExpanded(!aboutExpanded);
    };
    
    // Open demo modal
    const openDemo = (demoId: string) => {
        setActiveDemo(demoId);
        // Prevent body scrolling when modal is open
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    };
    
    // Close demo modal
    const closeDemo = () => {
        setActiveDemo(null);
        // Restore body scrolling
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'auto';
        }
    };

    // Get active demo content
    const getActiveDemoContent = () => {
        const project = portfolioProjects.find(p => p.demoLink === activeDemo);
        return project?.demoContent;
    };

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormError('Please fill out all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormError('Please enter a valid email address');
            return;
        }
        
        setFormStatus('submitting');
        setFormError(null);
        
        try {
            // Create mailto link with form data
            const subject = encodeURIComponent(`Resume Contact Form: ${formData.name}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            );
            
            // Open email client with pre-filled data
            window.location.href = `mailto:jonmartin82@hotmail.com?subject=${subject}&body=${body}`;
            
            // Set success state after a short delay
            setTimeout(() => {
                setFormStatus('success');
                // Reset form after success
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                
                // Reset form status after 5 seconds
                setTimeout(() => {
                    setFormStatus('idle');
                }, 5000);
            }, 1000);
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
            setFormError('There was an error sending your message. Please try again.');
        }
    };

    // Get active demo content
    const activeDemoContent = getActiveDemoContent();

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <header className="p-4 md:p-6 flex justify-between items-center sticky top-0 z-10 backdrop-blur-sm bg-gray-50/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Jonathon Martin</h1>
                <button 
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-700" />}
                </button>
            </header>

            <main className="max-w-5xl mx-auto p-4 md:p-8">
                {/* About Me Section */}
                <motion.div 
                    className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <FiUser className="mr-2 text-blue-500" size={24} />
                            <h2 className="text-2xl font-bold">About Me</h2>
                        </div>
                        <button 
                            onClick={toggleAbout}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
                            aria-label={aboutExpanded ? "Collapse about section" : "Expand about section"}
                        >
                            {aboutExpanded ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                    </div>
                    
                    <div className="flex items-start gap-6 flex-col md:flex-row">
                        <div className="md:w-1/3 flex flex-col items-center">
                            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold mb-4">
                                JM
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <p className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                                    <FiCalendar className="mr-2 text-blue-500" /> 30 Years Old
                                </p>
                                <p className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                                    <FiHome className="mr-2 text-blue-500" /> Houston, TX
                                </p>
                            </div>
                        </div>
                        
                        <div className="md:w-2/3">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                I&apos;m a self-taught IT Consultant and Builder with a passion for technology solutions. With hands-on experience in cloud services, IoT projects, and practical problem-solving, I focus on creating functional solutions that address real-world needs.
                            </p>
                            
                            {aboutExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        I approach technology from a practical perspective, learning what I need to accomplish specific goals. My experience includes working with AWS services, exploring IoT applications, and leveraging AI tools to enhance productivity. I&apos;m constantly expanding my knowledge through hands-on projects and self-directed learning.
                                    </p>
                                    
                                    <div className="mt-6">
                                        <h3 className="text-xl font-semibold mb-3 flex items-center">
                                            <FiBriefcase className="mr-2 text-blue-500" /> Experience
                                        </h3>
                                        <div className="border-l-2 border-blue-500 pl-4 ml-2">
                                            <div className="mb-4">
                                                <h4 className="font-medium">Full-time Caretaker</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">2023 - Present</p>
                                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                                    Providing comprehensive care for elderly grandparents, including physical assistance, medication management, and household maintenance.
                                                </p>
                                            </div>
                                            <div className="mb-4">
                                                <h4 className="font-medium">Self-Directed Technology Learning</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">2023 - Present</p>
                                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                                    Pursuing AWS certification, developing IoT projects, and building skills in AI-assisted development.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6">
                                        <h3 className="text-xl font-semibold mb-3 flex items-center">
                                            <FiHeart className="mr-2 text-blue-500" /> Interests
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium flex items-center">
                                                Cloud Computing
                                            </span>
                                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm font-medium flex items-center">
                                                IoT Development
                                            </span>
                                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium flex items-center">
                                                AI & Machine Learning
                                            </span>
                                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-sm font-medium flex items-center">
                                                Prompt Engineering
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            
                            {!aboutExpanded && (
                                <button 
                                    onClick={toggleAbout}
                                    className="text-blue-600 dark:text-blue-400 hover:underline mt-2 flex items-center"
                                >
                                    Read more about me <FiChevronDown className="ml-1" />
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>

                <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">Professional Summary</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    An adaptable and dedicated professional with a robust background in the service and cannabis industries,
                     complemented by substantial experience in caretaking. Skilled in customer service and time management,
                      I excel in high-pressure environments and am committed to providing exceptional support and service.
                      
                       My career has been marked by a passion for advancing technological integration in every field I&apos;ve engaged with,
                        from developing innovative cloud-based solutions to optimizing operational efficiencies in the cannabis sector. 
                        A lifelong interest in technology drives my pursuit of continual learning and application of the latest advancements to solve real-world problems. 
                        With a compassionate approach to caretaking, I bring empathy and resilience to all my professional endeavors, ensuring a balanced, client-focused perspective that values human interaction and technological empowerment.
                    </p>
                </div>

                {/* Portfolio Section */}
                <motion.div 
                    className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-center mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                        <FiBriefcase className="mr-2 text-blue-500" size={24} />
                        <h2 className="text-2xl font-bold">Portfolio</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioProjects.map((project, index) => (
                            <motion.div 
                                key={index}
                                className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                    {project.icon}
                                    <span className="ml-2">{project.title}</span>
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className={`px-3 py-1 ${tech.bgColor} ${tech.textColor} rounded-full text-sm font-medium`}
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    {project.demoType === 'modal' ? (
                                        <button 
                                            onClick={() => openDemo(project.demoLink)}
                                            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                                        >
                                            View Demo <FiChevronDown className="ml-1 transform rotate-270" />
                                        </button>
                                    ) : (
                                        <a 
                                            href={project.demoLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                                        >
                                            View Live <FiExternalLink className="ml-1" />
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        >
                                            <FiGithub size={20} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">Key Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                            <h3 className="text-xl font-semibold mb-3">MVP Logistics App</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                AI-powered logistics platform built on AWS. Streamlines operations and automates routine tasks.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">AWS</span>
                                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm font-medium">AI</span>
                            </div>
                        </div>
                        <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                            <h3 className="text-xl font-semibold mb-3">Tomato Monitoring System</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Developed a comprehensive monitoring system for IoT devices that tracks real-time data and provides actionable insights. The system handles thousands of data points per minute and uses AI to predict maintenance needs.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-sm font-medium">IoT</span>
                                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-full text-sm font-medium">Python</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                    <div className="flex items-center mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                        <FiAward className="mr-2 text-blue-500" size={24} />
                        <h2 className="text-2xl font-bold">Skills</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div 
                                key={index}
                                className="flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <span className={`p-2 rounded-md ${skill.bgColor} text-white mr-3`}>
                                            {skill.icon}
                                        </span>
                                        <span className="font-medium">{skill.name}</span>
                                    </div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {skill.level * 20}%
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div 
                                        className={`h-full ${skill.bgColor}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level * 20}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">Contact Me</h2>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
                            <input 
                                id="name"
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                value={formData.name}
                                onChange={handleInputChange}
                                disabled={formStatus === 'submitting'}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
                            <input 
                                id="email"
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={formStatus === 'submitting'}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
                            <textarea 
                                id="message"
                                placeholder="Your Message" 
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white min-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                value={formData.message}
                                onChange={handleInputChange}
                                disabled={formStatus === 'submitting'}
                            ></textarea>
                        </div>
                        
                        {formError && (
                            <div className="text-red-500 text-sm mt-1">{formError}</div>
                        )}
                        
                        {formStatus === 'success' && (
                            <div className="bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-3 rounded-lg">
                                Your message has been sent successfully! I&apos;ll get back to you soon.
                            </div>
                        )}
                        
                        <button 
                            type="submit" 
                            className={`${
                                formStatus === 'submitting' 
                                    ? 'bg-blue-400 cursor-not-allowed' 
                                    : 'bg-blue-600 hover:bg-blue-700'
                            } text-white p-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 mt-2 flex justify-center items-center`}
                            disabled={formStatus === 'submitting'}
                        >
                            {formStatus === 'submitting' ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </button>
                    </form>
                </div>
            </main>

            <footer className="mt-12 py-6 px-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Jonathon Martin. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="https://github.com/SyntaxMarfin" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FiGithub size={20} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/jon-martin-4863b5333/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FiLinkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:jonmartin82@hotmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FiMail size={20} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </footer>

            {/* Demo Modal */}
            <AnimatePresence>
                {activeDemo && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDemo}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full relative"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeDemo}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                aria-label="Close modal"
                            >
                                <FiX size={24} />
                            </button>
                            
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                {portfolioProjects.find(p => p.demoLink === activeDemo)?.title || 'Project Demo'}
                            </h2>
                            
                            <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg mb-6 flex items-center justify-center">
                                <div className="text-center">
                                    <FiMonitor size={48} className="mx-auto mb-2 text-gray-500 dark:text-gray-400" />
                                    <p className="text-gray-600 dark:text-gray-300">Demo Visualization</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {activeDemoContent?.description || 'Project description not available.'}
                            </p>
                            
                            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Key Features:</h3>
                            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                                {activeDemoContent?.features?.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                )) || <li>Features not available</li>}
                            </ul>
                            
                            <div className="flex justify-end">
                                <a 
                                    href="https://github.com/SyntaxMarfin" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center"
                                >
                                    <FiGithub className="mr-2" /> View on GitHub
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
