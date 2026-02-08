function Hero() {
  return (
    <section id="hero" className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-justify hyphens-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Full-Stack Developer</span> <br />
            Building Scalable & Data-Driven Systems
        </h1>


        <p className="text-gray-600 text-lg max-w-6xl leading-relaxed">
          I’m Ankur Jaiswal, a full-stack engineer with over 7+ years of experience
          building distributed systems, cloud-native services, and data-intensive
          applications.
        </p>

        <p className="text-gray-600 text-lg max-w-6xl leading-relaxed mt-4">
          I work across the stack — from designing backend architectures and
          event-driven workflows to building frontend interfaces that help teams
          observe, debug, and operate complex systems with confidence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Resume Button */}
            <a
                href="/src/assets/Ankur_Jaiswal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
                Download Resume
            </a>

            {/* LinkedIn Button */}
            <a
                href="https://www.linkedin.com/in/theankurjaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition"
            >
                LinkedIn Profile
            </a>

            {/* Github Button */}
            <a
              href="https://github.com/ank039943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition"
            >
              GitHub
            </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;
