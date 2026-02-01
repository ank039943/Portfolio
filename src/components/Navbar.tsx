type NavbarProps = {
  activeSection: string;
};

function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-3xl font-medium text-gray-900 tracking-tight">
          Ankur Jaiswal
        </div>

        {/* Navigation */}
        <nav className="space-x-8 hidden md:block">
          {[
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Contact" },
          ].map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>


      </div>
    </header>
  );
}

export default Navbar;
