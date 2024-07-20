import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

interface ButtonLinkProps {
  target?: HTMLAttributeAnchorTarget;
  download?: string;
  href: string;
  children: React.ReactNode;
}

export function ButtonLink({
  target = "_self",
  download,
  href,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      target={target}
      href={href}
      download={download}
      className={`
          hover:bg-violet hover:transition-colors hover:duration-200
          border-2 border-black rounded-lg
          text-black text-base
          px-4 pt-1 pb-2
        `}
    >
      {children}
    </Link>
  );
}
