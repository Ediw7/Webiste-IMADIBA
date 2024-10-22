import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Beasiswa from './pages/Beasiswa';
import Loker from './pages/Loker';
import Prestasi from './pages/Prestasi';
import Merchandise from './pages/Merchandise';
import Kontak from './pages/Kontak';
import Psdm from './pages/Psdm';
import Huker from './pages/Huker';
import Ekotif from './pages/Ekotif';
import Dimas from './pages/Dimas';
import Medkominfo from './pages/Medkominfo';

function Navigation() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(false); // Close dropdown when toggling mobile menu
  };

  const isActive = (path) => location.pathname === path;

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-lg">
        <Link to="/" className={`relative font-bold transition duration-300 ease-in-out group ${isActive('/') ? 'text-[#fdc259]' : 'text-black hover:text-[#fdc259]'}`}>
          Home
          <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#fdc259] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${isActive('/') ? 'scale-x-100' : ''}`} />
        </Link>
        <Link to="/about" className={`relative font-bold transition duration-300 ease-in-out group ${isActive('/about') ? 'text-[#fdc259]' : 'text-black hover:text-[#fdc259]'}`}>
          About
          <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#fdc259] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${isActive('/about') ? 'scale-x-100' : ''}`} />
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className={`relative font-bold transition duration-300 ease-in-out flex items-center group ${isActive('/beasiswa') || isActive('/loker') || isActive('/prestasi') ? 'text-[#fdc259]' : 'text-black hover:text-[#fdc259]'}`}
          >
            Info
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
              <Link to="/beasiswa" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#fdc259]">Info Beasiswa</Link>
              <Link to="/loker" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#fdc259]">Info Loker</Link>
              <Link to="/prestasi" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#fdc259]">Prestasi</Link>
            </div>
          )}
        </div>
        <Link to="/merchandise" className={`relative font-bold transition duration-300 ease-in-out group ${isActive('/merchandise') ? 'text-[#fdc259]' : 'text-black hover:text-[#fdc259]'}`}>
          Merchandise
          <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#fdc259] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${isActive('/merchandise') ? 'scale-x-100' : ''}`} />
        </Link>
        <Link to="/kontak" className={`relative font-bold transition duration-300 ease-in-out group ${isActive('/kontak') ? 'text-[#fdc259]' : 'text-black hover:text-[#fdc259]'}`}>
          Kontak
          <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#fdc259] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${isActive('/kontak') ? 'scale-x-100' : ''}`} />
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 mt-2">
            <div className="p-4 space-y-4">
              <Link 
                to="/" 
                className="block font-bold py-2 hover:text-[#fdc259]"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block font-bold py-2 hover:text-[#fdc259]"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <div>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center font-bold w-full py-2 hover:text-[#fdc259]"
                >
                  Info
                  <svg
                    className={`ml-2 h-5 w-5 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="pl-4 space-y-2">
                    <Link 
                      to="/beasiswa" 
                      className="block py-2 hover:text-[#fdc259]"
                      onClick={toggleMobileMenu}
                    >
                      Info Beasiswa
                    </Link>
                    <Link 
                      to="/loker" 
                      className="block py-2 hover:text-[#fdc259]"
                      onClick={toggleMobileMenu}
                    >
                      Info Loker
                    </Link>
                    <Link 
                      to="/prestasi" 
                      className="block py-2 hover:text-[#fdc259]"
                      onClick={toggleMobileMenu}
                    >
                      Prestasi
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                to="/merchandise" 
                className="block font-bold py-2 hover:text-[#fdc259]"
                onClick={toggleMobileMenu}
              >
                Merchandise
              </Link>
              <Link 
                to="/kontak" 
                className="block font-bold py-2 hover:text-[#fdc259]"
                onClick={toggleMobileMenu}
              >
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <header className="bg-white shadow-md p-4 relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo flex items-center space-x-3">
            <img
              src="/logoimadiba.png"
              alt="Logo Imadiba"
              className="h-10"
            />
            <span className="text-2xl font-bold tracking-wide text-black">IMADIBA</span>
          </div>
          <Navigation />
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beasiswa" element={<Beasiswa />} />
          <Route path="/loker" element={<Loker />} />
          <Route path="/prestasi" element={<Prestasi />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/psdm" element={<Psdm />} />
          <Route path="/huker" element={<Huker />} />
          <Route path="/ekotif" element={<Ekotif />} />
          <Route path="/dimas" element={<Dimas />} />
          <Route path="/medkominfo" element={<Medkominfo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;