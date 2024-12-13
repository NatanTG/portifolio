import { FaNodeJs, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiFlutter, SiMysql, SiNextdotjs, SiNestjs, SiPrisma, SiDart } from "react-icons/si";

export default function StacksSection() {
  const stacks = [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Nest.js", icon: <SiNestjs /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ];

  return (
    <div className="mt-5">
      <h2 className="text-4xl font-bold mb-4">Stacks</h2>
      <div className="flex flex-wrap gap-4">
        {stacks.map((stack) => (
          <button
            key={stack.name}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
          >
            <span>{stack.icon}</span> 
            <span>{stack.name}</span> 
          </button>
        ))}
      </div>
    </div>
  );
}
