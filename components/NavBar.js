import React from "react";
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white font-menu">
      <div className="flex items-center gap-2 text-primary font-bold">
        <HomeIcon className="w-6 h-6" />
        <span>LocaTunisie</span>
      </div>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-primary">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/logements" className="hover:text-primary">
            Logements
          </Link>
        </li>
        <li>
          <Link href="/inscription" className="hover:text-primary">
            Inscription
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </li>
      </ul>
      <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
        Connexion
      </button>
    </nav>
  );
}
