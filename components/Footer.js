import React from "react";
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white py-4 text-center text-sm font-menu shadow-t">
      <p>LocaTunisie © 2025</p>
      <div className="flex justify-center gap-4 mt-2">
        <Link href="/contact" className="hover:text-primary">
          Contact
        </Link>
        <a href="#" className="hover:text-secondary">
          Facebook
        </a>
        <a href="#" className="hover:text-secondary">
          Twitter
        </a>
      </div>
    </footer>
  );
}
