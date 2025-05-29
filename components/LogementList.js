import React from 'react'
import LogementCard from './LogementCard'

export default function LogementList({ logements }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {logements.map((logement) => (
        <LogementCard key={logement.id} logement={logement} />
      ))}
    </div>
  )
}
