import "react";
import { useState } from "react";
import CGA_Broad_Consulting_logo from "./CGA_Broad_Consulting_logo.jpg"


function Header () {
        
            const [isOpen, setIsOpen] = useState(false);

              {/*const isActive = (path) => location.pathname === path;*/}

    return (
        <>  
            
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-violet-950 backdrop-blur-md shadow-lg ">
                <div className="font-dancing margin-top: 65px; mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center pt-1.5">
                        <a className="flex items-center space-x-3 group
                        " href="/">

                            <div className="relative" id="logo">
                                <img src={CGA_Broad_Consulting_logo} alt="logo" height="85px" width="85px" className="shadow-sm brightness-100"/>
                            </div>

                        </a>
                    <nav className="hidden lg:flex items-center space-x-1">
                        <a className="nav_style bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900 hover:text-white" href="/">
                        À propos
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 w-0 group-hover:w-full">
                            </div>
                        </a>
                        <a className="nav_style bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900 hover:text-white" href="/solution">
                        Nos Services
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 w-0 group-hover:w-full">
                            </div>
                        </a>
                        <a className="nav_style bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900 hover:text-white" href="/about">
                        Adhesion CGA
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 w-full">
                            </div>
                        </a>
                        <a className="nav_style bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900 hover:text-white" href="/blog">
                        Blog
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 w-0 group-hover:w-full">
                            </div>
                        </a>
                        <a className="nav_style bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900 hover:text-white" href="https://www.cfp-brcgroup.com/">
                        Formation
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 w-0 group-hover:w-full">
                            </div>
                        </a>
                         <a className="nav_style bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900 hover:text-white" href="/prenez">
                        Prenez rendez-vous
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 w-0 group-hover:w-full">
                            </div>
                        </a>
                    </nav>
                    <div className="hidden lg:block">
                        <a className="inline-flex items-center px-6 py-2.5 bg-violet-700 text-white font-semibold rounded-xl hover:bg-fuchsia-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" href="/contact">
                            <i className="fas fa-phone pr-2"></i>
                            Parler à un expert
                        </a>
                    </div>
                    <div className="lg:hidden">
                        {/*bouton croix*/}
                        <button className=" w-10 h-10 flex items-center justify-centerp-2.5 rounded-xl duration-300 text-white transition-all transition-discrete " onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                            className="lucide lucide-x h-6 w-6  {transition-opacity duration-100 ease-in-out transform isOpen ? 'opacity-100 scale-100': 'opacity-0 scale-90'">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                            </svg>
                            ):(
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                            className="lucide lucide-menu h-6 w-7  {transition-opacity duration-100 {ease-in-out transform isOpen ? 'opacity-0 scale-90': 'opacity-100 scale-100'">
                                <line x1="4" x2="20" y1="12" y2="12"></line>
                                <line x1="4" x2="20" y1="6" y2="6"></line>
                                <line x1="4" x2="20" y1="18" y2="18"></line>
                            </svg>
                            )}   
                        </button>
                            {/*Menu mobile si Ouvert*/}
                            {isOpen && (
                                <div className="lg:hidden py-8 fixed h-70 left-0 w-full bg-violet-950 rounded-b-2xl shadow-xl text-sm z-40">
                                    <nav className="flex flex-col text-sm">
                                        <a className="hidden-nav bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900" href="/">À propos</a>
                                        <a className="text-l hidden-nav bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900" href="/solution">Nos Services</a>
                                        <a className="hidden-nav bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900" href="/about">Adhesion CGA</a>
                                        <a className="hidden-nav bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900" href="/blog">Blog</a>
                                        <a className="hidden-nav bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900" href="https://www.cfp-brcgroup.com/">Formation</a>
                                         <a className="hidden-nav bg-gradient-to-r hover:from-violet-900 hover:to-fuchsia-900" href="/prenez">Prendre Rendez-vous</a>
                                        <div className="pt-4 border-t border-neutral-200/50">
                                            <a className="block w-full text-center px-4 py-3 mb-5 bg-gradient-to-r from-violet-900 to-fuchsia-900 text-white font-semibold rounded-xl hover:from-fuchsia-800 hover:to-fuchsia-800 transition-all duration-300" href="/contact">
                                            Parler à un expert
                                            </a>
                                        </div>
                                        </nav>
                                        <div id="centre" className="text-center text-white text-sm hover:decoration-slice">
                                            <div className="pb-5">
                                                <a className="pr-5" href="">
                                                    <i className="fas fa-phone pr-2"></i>
                                                    contact
                                                </a>
                        
                                                <a className="" href="">
                                                    <i className="fas fa-envelope pr-2"></i>
                                                    cga-brc@gmail.com</a>
                                            </div>
                                        </div>
                                </div>
                            )}
                    </div>
                </div>
                <div id="centre" className="pt-2 text-center text-white ">
                    <div className="pb-1">
                        <a className="pr-5" href="">
                            <i className="fas fa-phone pr-2 hover:decoration-slice"></i>
                            contact
                            </a>
                        
                        <a className="" href="">
                            <i className="fas fa-envelope pr-2"></i>
                            cga-brc@gmail.com</a>


                        </div>
                </div>
            
            </div>
        </header>
            
        </>
    )
}

export default Header