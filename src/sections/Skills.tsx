import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiElasticsearch,
  SiAmazon,
  SiDocker,
  SiJenkins,
  SiGit,
  SiLinux,
  SiReact,
} from "react-icons/si";

import {
  HiOutlineCube,
  HiOutlineCloud,
  HiOutlineCollection,
  HiOutlineCog,
} from "react-icons/hi";

function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-gray-900">
          Skills
        </h2>

        {/* Tailwind-style skill grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border border-gray-200 rounded-2xl overflow-hidden">

          <SkillItem icon={<SiJavascript color="#F7DF1E" />} name="JavaScript" />
          <SkillItem icon={<SiTypescript color="#3178C6" />} name="TypeScript" />
          <SkillItem icon={<SiNodedotjs color="#339933" />} name="Node.js" />
          <SkillItem icon={<SiNestjs color="#E0234E" />} name="NestJS" />
          <SkillItem icon={<SiReact color="#61DAFB" />} name="React" />

          <SkillItem icon={<SiPostgresql color="#4169E1" />} name="PostgreSQL" />
          <SkillItem icon={<SiMongodb color="#47A248" />} name="MongoDB" />
          <SkillItem icon={<SiRedis color="#DC382D" />} name="Redis" />
          <SkillItem icon={<SiElasticsearch color="#005571" />} name="Elasticsearch" />
          <SkillItem icon={<SiApachekafka color="#231F20" />} name="Kafka" />

          <SkillItem icon={<SiRabbitmq color="#FF6600" />} name="RabbitMQ" />
          <SkillItem icon={<SiAmazon color="#FF9900" />} name="AWS" />
          <SkillItem icon={<SiDocker color="#2496ED" />} name="Docker" />
          <SkillItem icon={<SiJenkins color="#D24939" />} name="Jenkins" />
          <SkillItem icon={<SiGit color="#F05032" />} name="Git" />

          <SkillItem icon={<SiLinux color="#000000" />} name="Linux" />
          <SkillItem icon={<HiOutlineCloud className="text-gray-500" />} name="CI/CD" />
          <SkillItem icon={<HiOutlineCube className="text-gray-500" />} name="Microservices" />
          <SkillItem icon={<HiOutlineCollection className="text-gray-500" />} name="Data Pipelines" />
          <SkillItem icon={<HiOutlineCog className="text-gray-500" />} name="Observability" />

        </div>
      </div>
    </section>
  );
}

/* ---------- Skill Item ---------- */

function SkillItem({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 h-32 border border-gray-200 bg-white transition-all duration-200 hover:border-gray-300 hover:bg-gray-50">
      <span className="text-3xl transition-transform duration-200 group-hover:-translate-y-0.5">
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-800">
        {name}
      </span>
    </div>
  );
}

export default Skills;
