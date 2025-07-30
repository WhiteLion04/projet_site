import "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import CGA_Broad_Consulting_logo from "./CGA_Broad_Consulting_logo.jpg"


function Header () {
        
            const [isOpen, setIsOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
const navigation = [
    { name: 'A_propos', href: '/' },
    { name: 'Nos Services', href: '/services' },
    { name: 'Adherer au  CGA', href: '/adhesion' },
    { name: 'Blog', href: '/blog' },
    { name: 'Formation', href: 'https://www.cfp-brcgroup.com' },
    { name: 'Contact', href: '/prenez' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

    return (
        <>  
            
            <header className={`h-20 fixed top-0 left-0 right-0 z-50  bg-violet-950 transition-all duration-300 ${
      isScrolled 
        ? 'bg-violet-950 backdrop-blur-md shadow-lg ' 
        : 'bg-transparent'
    }`}>
                <div className="max-w-7xl font-dancing margin-top: 65px mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center pt-1.5">
                            <div className="relative" id="logo">
                                <img src={CGA_Broad_Consulting_logo} alt="logo" height="85px" width="85px" className="shadow-sm brightness-100"/>
                            </div>
                <nav className="hidden lg:flex items-center">
                    {navigation.map((item) => (
                    <Link
                        key={item.name}
                        to={item.href}
                        className={`px-4 py-2.5 mx-2 rounded-xl text-sm font-medium transition-all duration-300 relative group bg-gradient-to-r hover:from-violet-800 hover:to-fuchsia-800 text-white ${
                        isActive(item.href)
                            ? 'bg-gradient-to-r from-violet-800 to-fuchsia-800 text-white '
                            : ''
                        }`}
                    >
                        {item.name}
                        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 ${
                        isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></div>
                    </Link>
                    ))}

                    <div className="hidden lg:block">
                        <button
                            className="inline-flex mx-10 items-center px-6 py-2.5 bg-violet-800 hover:bg-fuchsia-800 text-white font-semibold rounded-xl  transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        > Parler à un expert
                            </button>
                    </div>
                </nav>
                 {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2.5 rounded-xl transition-all duration-300 ${
                            isScrolled 
                            ? 'text-white' 
                            : 'text-white'
                        }`}
                        >
                        {isOpen ? <i className="fas fa-times h-6 w-6" /> : <i className="fas fa-bars h-6 w-6" />}
                        </button>
                        </div>
                    </div>
                            {/*Menu mobile si Ouvert*/}
                    {isOpen && (
                    <div className="lg:hidden py-4 border-t  bg-violet-950 backdrop-blur-md rounded-b-2xl shadow-xl animate-fade-in">
                        <nav className="flex flex-col space-y-1">
                        {navigation.map((item) => (
                        <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-violet-800 to-fuchsia-800 text-white'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white">
                <button
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-violet-800 to-fuchsia-800 text-white font-semibold rounded-xl hover:from-violet-950  hover:to-fuchsia-800 transition-all duration-300"
                >
                  Parler à un Expert
                </button>
              </div>
            </nav>
            <div id="centre" className="text-center text-white text-sm hover:decoration-slice">
                <div className="pb-5">
                   <a className="pr-5" href="">
                    <i className="fas fa-phone pr-2"></i>
                    contact</a>
                    
                    <a className="" href="">
                    <i className="fas fa-envelope pr-2"></i>
                    cga-brc@gmail.com</a>
                    </div>
            </div>
          </div>
             
        )}
            </div>
        </header>
            
        </>
    )
}

export default Header