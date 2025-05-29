import React from "react";
import Link from 'next/link'

export default function LogementCard({ logement }) {
  return (
    <Link href={`/logements/${logement.id}`}>
      <div className="rounded-lg border border-gray-200 shadow hover:shadow-md transition overflow-hidden">
        <img
          src={logement.image}
          alt={logement.titre}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-primary font-bold text-lg">{logement.nom}</h2>
          <p className="text-gray-500">{logement.categorie}</p>
          <p className="text-secondary font-semibold mt-1">
            {logement.prix} TND
          </p>
        </div>
      </div>
    </Link>
  );
}
