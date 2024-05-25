import Link from "next/link";
import { Button } from "../button";
import { NavItemProps, NavbarProps } from ".";

export function DesktopNavbar({ items }: NavbarProps) {
  return (
    <nav className="hidden sm:flex justify-between max-w-7xl mx-auto py-6 text-black font-bold items-center h-24">
      <Link href="/" className="text-xl">
        pedro féo.
      </Link>
      <div className="flex gap-8 text-base">
        <ul className="flex gap-8 items-center">
          {items.map(({ href, title }) => (
            <li
              key={title}
              className="hover:opacity-60 transition ease-in-out duration-200"
            >
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
        <Button>resume</Button>
      </div>
    </nav>
  );
}
