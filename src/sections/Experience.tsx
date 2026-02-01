function Experience() {
  return (
    <section id="experience" className="py-24 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Experience
        </h2>

        <div className="max-w-6xl text-justify hyphens-auto">
          <h3 className="text-xl font-semibold text-gray-900">
            Associate Lead Engineer (Full-Stack)
          </h3>
          <p className="text-gray-500 mt-1">
            KNNX Corp. (formerly DLT Labs) · Jul 2018 – Present
          </p>

          <ul className="mt-6 space-y-4 text-gray-600 leading-relaxed">
            <li>
              Worked on the design and development of a large-scale
              information supply-chain platform, contributing across
              backend services and frontend tools used by engineering
              and operations teams.
            </li>

            <li>
              Built and evolved distributed backend services responsible
              for processing high-volume transactions using event-driven
              workflows, ensuring reliability, traceability, and
              consistent data flow across systems.
            </li>

            <li>
              Designed and developed frontend monitoring and analysis
              interfaces that visualize transaction lifecycles, system
              events, and processing states, enabling engineers to
              debug and understand system behavior effectively.
            </li>

            <li>
              Implemented internal dashboards that allow teams to inspect
              streaming events, track processing progress, and identify
              failures without directly interacting with backend
              infrastructure.
            </li>

            <li>
              Collaborated closely with product, DevOps, and engineering
              teams to improve system observability, reduce operational
              friction, and shorten incident investigation cycles.
            </li>

            <li>
              Took ownership of end-to-end features — from API design and
              data modeling to frontend integration — ensuring smooth
              delivery and stability in production environments.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
