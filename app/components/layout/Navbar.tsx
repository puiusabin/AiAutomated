import { useState } from "react";

interface NavbarProps {
  isFloating?: boolean;
  bgClass?: string;
}

export default function Navbar({ isFloating = false, bgClass = "bg-[rgba(171,171,171,0.24)]" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header 
        className={`${isFloating ? 'fixed top-0 left-0 right-0 z-50' : ''} 
          flex justify-between items-center px-4 sm:px-8 md:px-12 py-2 sm:py-3 w-full transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-0 sm:px-6 md:px-0 flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center px-3 sm:px-5 py-2 sm:py-3 bg-[rgba(171,171,171,0.15)] backdrop-blur-md rounded-full">
            <span className="font-bold text-lg sm:text-xl">AiAutomated</span>
          </div>

          {/* Mobile menu button and Buy now for mobile */}
          <div className="flex items-center gap-2 sm:hidden">
            <button className="p-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
              Buy now
            </button>
            <button 
              className="p-2 rounded-full bg-[rgba(171,171,171,0.15)] backdrop-blur-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center">
            <div
              className="flex gap-4 md:gap-6 px-4 sm:px-6 py-1 bg-[rgba(171,171,171,0.15)] backdrop-blur-md rounded-full text-sm sm:text-base md:text-lg items-center"
              style={{
                fontFamily: 'Inter, "Inter Placeholder", sans-serif',
              }}
            >
              {["Services", "Pricing", "Case studies", "Team", "FAQ"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:opacity-80 transition-opacity whitespace-nowrap py-1"
                  >
                    {item}
                  </a>
                )
              )}
              <button className="p-2 sm:p-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
                Buy now
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[rgba(171,171,171,0.15)] backdrop-blur-md mx-4 rounded-xl mb-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Services", "Pricing", "Case studies", "Team", "FAQ"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 px-3 rounded-md hover:bg-[rgba(171,171,171,0.24)] transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}