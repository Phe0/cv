import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItemProps } from ".";
import Link from "next/link";

interface MobileDrawerProps {
  isOpen: boolean;
  items: Array<NavItemProps>;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, items, onClose }: MobileDrawerProps) {
  return (
    <div
      className={`
        fixed right-0 top-0 
        bg-black bg-opacity-60
        h-full w-full
        transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <section
        className={`
        fixed right-0 top-0 
        bg-white h-full w-2/5
        rounded-l-xl
        px-6
        `}
      >
        <div className="flex justify-end mb-6 h-24">
          <button className="" onClick={onClose}>
            <FontAwesomeIcon className="text-2xl" icon={faXmark} />
          </button>
        </div>
        <ul className="flex flex-col gap-8 text-xl">
          {items.map(({ href, title }) => (
            <li className="flex justify-end" key={title}>
              <Link onClick={onClose} href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
