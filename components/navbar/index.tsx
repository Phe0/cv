import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export interface NavItemProps {
  readonly title: string;
  readonly href: string;
}

const items: Array<NavItemProps> = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "experience",
    href: "#experience",
  },
  {
    title: "projects",
    href: "#projects",
  },
  {
    title: "contact",
    href: "#contact",
  },
];

export interface NavbarProps {
  items: Array<NavItemProps>;
}

export function Navbar() {
  return (
    <header className="sticky top-0 h-48 bg-[length:300%] bg-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet from-0% to-70% px-6">
      <DesktopNavbar items={items} />
      <MobileNavbar items={items} />
    </header>
  );
}
