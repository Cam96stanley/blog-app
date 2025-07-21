"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import DevRoots from "@/public/devroots.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex justify-between items-center p-2 rounded-b-2xl relative bg-neutral-700 border-b-2 border-b-emerald-400">
      <Image
        src={DevRoots}
        alt="The words DevRoots with a pine tree to the left of it against a blue background."
        className="w-40 md:w-50 h-auto"
      />
      {/* Desktop Menu */}
      <ul className="hidden md:text-xl md:flex text-lg text-zinc-100 px-2 gap-4">
        <li>
          <Link className="hover:text-emerald-400" href="#">
            Login
          </Link>
        </li>
        <li>
          <Link className="hover:text-emerald-400" href="#">
            Sign up
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <button
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="text-white" size={30} />
        ) : (
          <Menu className="text-white" size={30} />
        )}
      </button>

      {isOpen && (
        <ul className="absolute top-full right-4 mt-2 bg-zinc-900 text-white shadow-md p-4 rounded-md w-40 flex flex-col gap-4 text-lg md:hidden z-50">
          <li>
            <Link
              href="#"
              className="hover:text-emerald-400"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-emerald-400"
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
