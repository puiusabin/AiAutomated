export default function HeroSection() {
  return (
    <div className="max-w-3xl mx-auto sm:mx-0">
      <h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight sm:leading-none tracking-tight mb-8 sm:mb-12 md:mb-16"
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 25%, #CCCCCC 50%, #999999 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          display: "inline-block",
          fontFamily:
            '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
        }}
      >
        AI Services
        <br />
        for your Business
        <br />
        Growth
      </h1>

      <p className="text-sm sm:text-base font-thin max-w-xl mb-8 sm:mb-12 md:mb-16">
        We'll pump your company with AI. As a leading AI automation
        agency with 99 years of experience, we deliver top results.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
        <button
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-md text-black transition-all hover:scale-105"
          style={{ backgroundColor: "rgb(220, 234, 34)" }}
        >
          Subscribe now
        </button>
        <a href="#" className="text-white hover:underline py-2 sm:hidden">Our services</a>
      </div>
      
      {/* Mobile-only footer section */}
      <div className="mt-16 pt-8 border-t border-gray-700 sm:hidden">
        <p className="text-sm text-gray-400 mb-2">Loved by founders worldwide</p>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-500 border border-black"></div>
            ))}
          </div>
          <a href="#" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}