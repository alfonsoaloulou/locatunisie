import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
<div className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      <div className="absolute inset-0"></div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-title mb-6">Bienvenue sur LocaTunisie</h1>
        <div className="flex justify-center gap-6">
          <Link href="/logements">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-menu hover:bg-secondary transition">
              Voir les logements
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-secondary text-white px-6 py-3 rounded-lg font-menu hover:bg-primary transition">
              Contactez-nous
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
