import { SiGithub, SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ankur Jaiswal. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ank039943"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
            aria-label="GitHub"
          >
            <SiGithub className="text-xl" />
          </a>

          <a
            href="https://linkedin.com/in/theankurjaiswal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
