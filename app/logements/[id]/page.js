import DetailsLogementCard from '@/components/DetailsLogementCard';
import { logements } from '@/data/logements';
import React from 'react';

export default function LogementDetailPage({ params }) {
  const id = parseInt(params.id);
  const logement = logements.find((item) => item.id === id);

  return (
    <div className="py-10">
      <DetailsLogementCard logement={logement} />
    </div>
  );
}
