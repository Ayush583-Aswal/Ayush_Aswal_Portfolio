"use client";

import { Link as ScrollLink } from "react-scroll";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex justify-between max-w-3xl items-center mx-auto px-4">
        {/* Logo Section */}
        <div>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="font-serif text-2xl font-bold cursor-pointer"
          >
            A.A
          </ScrollLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground">
          <li className="transition-colors hover:text-foreground">
            <ScrollLink to="about" smooth={true} duration={500} offset={-93} className="cursor-pointer">
              About
            </ScrollLink>
          </li>
          <li className="transition-colors hover:text-foreground">
            <ScrollLink to="skills" smooth={true} duration={500} offset={-65} className="cursor-pointer">
              Skills
            </ScrollLink>
          </li>
          <li className="transition-colors hover:text-foreground">
            <ScrollLink to="education" smooth={true} duration={500} offset={-85} className="cursor-pointer">
              Education
            </ScrollLink>
          </li>
          <li className="transition-colors hover:text-foreground">
            <ScrollLink to="contact" smooth={true} duration={500} offset={-85} className="cursor-pointer">
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Theme Toggle */}
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
