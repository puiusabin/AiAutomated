import { useState } from "react";

interface NavbarProps {
  isFloating?: boolean;
  bgClass?: string;
}

export default function Navbar({
  isFloating = false,
  bgClass = "bg-[rgba(171,171,171,0.24)]",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`${isFloating ? "fixed top-0 right-0 left-0 z-50" : ""} flex w-full items-center justify-between px-4 py-2 transition-all duration-300 sm:px-8 sm:py-3 md:px-12`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-0 sm:px-6 md:px-0">
          {/* Logo */}
          <div className="flex items-center rounded-full bg-[rgba(171,171,171,0.15)] px-3 py-2 backdrop-blur-md sm:px-5 sm:py-3">
            <span className="text-lg font-bold sm:text-xl">AiAutomated</span>
          </div>

          {/* Mobile menu button and Buy now for mobile */}
          <div className="flex items-center gap-2 sm:hidden">
            <button className="rounded-full bg-white p-2 font-semibold whitespace-nowrap text-black transition-colors hover:bg-gray-100">
              Buy now
            </button>
            <button
              className="rounded-full bg-[rgba(171,171,171,0.15)] p-2 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center sm:flex">
            <div
              className="flex items-center gap-4 rounded-full bg-[rgba(171,171,171,0.15)] px-4 py-1 text-sm backdrop-blur-md sm:px-6 sm:text-base md:gap-6 md:text-lg"
              style={{
                fontFamily: 'Inter, "Inter Placeholder", sans-serif',
              }}
            >
              {["Services", "Pricing", "Case studies", "Team", "FAQ"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="py-1 whitespace-nowrap transition-opacity hover:opacity-80"
                  >
                    {item}
                  </a>
                ),
              )}
              <button className="rounded-full bg-white p-2 font-semibold whitespace-nowrap text-black transition-colors hover:bg-gray-100 sm:p-3">
                Buy now
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="mx-4 mb-4 rounded-xl bg-[rgba(171,171,171,0.15)] backdrop-blur-md sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {["Services", "Pricing", "Case studies", "Team", "FAQ"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="block rounded-md px-3 py-2 transition-colors hover:bg-[rgba(171,171,171,0.24)]"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
}
