// Next.js Interactive Resume with Light/Dark Theme
// Features: Skills, Projects, Portfolio, Contact Form, Analytics

"use client";

import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function Resume() {
    // Initialize darkMode based on system preference
    const [darkMode, setDarkMode] = useState(false);
    
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
                <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">Professional Summary</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Cloud-focused professional with AWS Solutions Architect Associate certification and hands-on experience 
                        leveraging AI tools for cloud-based applications. Currently building an MVP app to streamline logistics 
                        and automate tasks.
                    </p>
                </div>

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
                                IoT solution for monitoring environmental data for optimal tomato growing conditions.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-sm font-medium">IoT</span>
                                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-full text-sm font-medium">Python</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-md font-medium border border-gray-200 dark:border-gray-600 shadow-sm">AWS</span>
                        <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-md font-medium border border-gray-200 dark:border-gray-600 shadow-sm">Python</span>
                        <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-md font-medium border border-gray-200 dark:border-gray-600 shadow-sm">JavaScript</span>
                        <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-md font-medium border border-gray-200 dark:border-gray-600 shadow-sm">AI-Assisted Development</span>
                        <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-md font-medium border border-gray-200 dark:border-gray-600 shadow-sm">Next.js</span>
                    </div>
                </div>
                
                <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                    <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">Contact Me</h2>
                    <form className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
                            <input 
                                id="name"
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
                            <input 
                                id="email"
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
                            <textarea 
                                id="message"
                                placeholder="Your Message" 
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white min-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </main>

            <footer className="mt-12 py-6 px-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Jonathon Martin. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FiGithub size={20} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FiLinkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FiMail size={20} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
