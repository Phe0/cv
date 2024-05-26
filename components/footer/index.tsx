import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { CustomLink } from "../custom-link";

const items = [
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/Phe0",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/pedrofeo/",
  },
  {
    name: "Email",
    icon: faEnvelope,
    href: "mailto:pedrohafeo@gmail.com",
  },
];

export function Footer() {
  return (
    <footer className="w-full flex justify-center flex-col items-center">
      <ul className="sm:fixed sm:mb-0 mb-6 bottom-8 right-8 flex sm:flex-col items-center sm:gap-4 gap-8 text-3xl text-violet">
        {items.map(({ name, icon, href }) => (
          <li
            key={name}
            className="hover:-translate-y-1 transform duration-100"
          >
            <Link href={href}>
              <FontAwesomeIcon icon={icon} />
            </Link>
          </li>
        ))}
      </ul>
      <CustomLink href="https://github.com/Phe0/cv" className="mb-8 text-sm">
        designed & built by pedro féo
      </CustomLink>
    </footer>
  );
}
