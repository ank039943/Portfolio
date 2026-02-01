function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          About Me
        </h2>

        <div className="max-w-6xl space-y-4 text-gray-600 text-lg text-justify hyphens-auto">
          <p className="text-gray-600 leading-relaxed max-w-6xl">
            I design and build full-stack applications with a strong focus on
            scalability, reliability, and data flow. My background is rooted in
            backend systems and cloud infrastructure, which shapes how I approach
            frontend development — with an emphasis on clarity, performance,
            and operational usefulness.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-6xl mt-6">
            Over the years, I’ve worked on systems that process large volumes of
            events and transactions, where visibility and observability are just
            as important as correctness. This led me to build frontend tools and
            dashboards that allow teams to monitor workflows, inspect events,
            and quickly diagnose issues in distributed environments.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-6xl mt-6">
            Today, I enjoy working across the stack — combining backend engineering
            principles with modern frontend development using React — to deliver
            applications that are not only technically sound but also genuinely
            useful for developers and operators.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
