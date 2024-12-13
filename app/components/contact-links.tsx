import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function ContactLinks() {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/NatanTG",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nat%C3%A3/",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      href: "mailto:natatidioligirotto@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "Currículo",
      href: "/curriculo.pdf",
      icon: <FaFilePdf />,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 sm:px-4 rounded-lg shadow-md transition-all"
        >
          <span>{link.icon}</span>
          <span className="text-sm sm:text-base">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
