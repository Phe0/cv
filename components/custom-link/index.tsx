import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function CustomLink({ href, children, className }: CustomLinkProps) {
  return (
    <Link
      className={`
        relative overflow-hidden text-violet-dark z-0
        before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-violet-dark before:transform before:scale-x-0 before:transition-transform
        hover:before:scale-x-100
        ${className}
      `}
      href={href}
    >
      {children}
    </Link>
  );
}
