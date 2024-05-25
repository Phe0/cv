"use client";

import Link from "next/link";
import { NavbarProps } from ".";
import { MobileMenuButton } from "./mobile-menu-button";
import { MobileDrawer } from "./mobile-drawer";
import { useState } from "react";

export function MobileNavbar({ items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sm:hidden flex justify-between max-w-7xl mx-auto py-6 text-black font-bold items-center h-24">
      <Link href="/" className="text-xl">
        pedro féo.
      </Link>
      <MobileMenuButton onClick={() => setIsOpen(true)} />
      <MobileDrawer
        isOpen={isOpen}
        items={items}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
}
