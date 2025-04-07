export default function HeroSection() {
  return (
    <div className="mx-auto max-w-3xl sm:mx-0">
      <h1
        className="mb-8 text-5xl leading-tight font-extrabold tracking-tight sm:mb-12 sm:text-6xl sm:leading-none md:mb-16 md:text-7xl lg:text-8xl"
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

      <p className="mb-8 max-w-xl text-sm font-thin sm:mb-12 sm:text-base md:mb-16">
        We'll pump your company with AI. As a leading AI automation agency with
        99 years of questionable experience, we deliver top results.
      </p>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
        <button
          className="w-full rounded-md px-6 py-3 font-bold text-black transition-all hover:scale-105 sm:w-auto sm:px-8 sm:py-4"
          style={{ backgroundColor: "rgb(220, 234, 34)" }}
        >
          Subscribe now
        </button>
        <a href="#" className="py-2 text-white hover:underline sm:hidden">
          Our services
        </a>
      </div>

      {/* Mobile-only footer section */}
      <div className="mt-16 border-t border-gray-700 pt-8 sm:hidden">
        <p className="mb-2 text-sm text-gray-400">
          Loved by founders worldwide
        </p>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border border-black bg-gray-500"
              ></div>
            ))}
          </div>
          <a href="#" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
