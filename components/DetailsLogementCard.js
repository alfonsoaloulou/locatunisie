'use client';
import React from 'react';

export default function DetailsLogementCard({ logement }) {
  if (!logement) return <p>Logement introuvable.</p>;

  const handleReservation = () => {
    alert('Réservation confirmée');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <img src={logement.image} alt={logement.nom} className="w-full h-64 object-cover rounded" />
      <h2 className="text-2xl font-title text-[--primary] mt-4">{logement.nom}</h2>
      <p className="text-[--txtcolor]">Catégorie : {logement.categorie}</p>
      <p className="text-[--txtcolor]">Prix : <span className="text-[--secondary] font-bold">{logement.prix} TND</span></p>
      <p className="text-[--txtcolor]">Description : {logement.description}</p>
      <button
        onClick={handleReservation}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
      >
        Réserver
      </button>
    </div>
  );
}
