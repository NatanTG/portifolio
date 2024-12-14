import { FaNodeJs, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
  SiMysql,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiDart,
} from "react-icons/si";

export default function StacksSection() {
  const stacks = [
    { name: "TypeScript", icon: <SiTypescript />, link: "https://www.typescriptlang.org/" },
    { name: "Dart", icon: <SiDart />, link: "https://dart.dev/" },
    { name: "Flutter", icon: <SiFlutter />, link: "https://flutter.dev/" },
    { name: "Node.js", icon: <FaNodeJs />, link: "https://nodejs.org/" },
    { name: "Nest.js", icon: <SiNestjs />, link: "https://nestjs.com/" },
    { name: "Prisma", icon: <SiPrisma />, link: "https://www.prisma.io/" },
    { name: "MySQL", icon: <SiMysql />, link: "https://www.mysql.com/" },
    { name: "React.js", icon: <FaReact />, link: "https://reactjs.org/" },
    { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org/" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, link: "https://tailwindcss.com/" },
    { name: "HTML5", icon: <FaHtml5 />, link: "https://html.spec.whatwg.org/" },
    { name: "CSS3", icon: <FaCss3Alt />, link: "https://www.w3.org/Style/CSS/" },
  ];
  return (
    <div className="mt-5">
      <h2 className="text-4xl font-bold mb-4">Stacks</h2>
      <div className="flex flex-wrap gap-4">
        {stacks.map((stack) => (
          <a
            key={stack.name}
            href={stack.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
          >
            <span>{stack.icon}</span>
            <span>{stack.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
