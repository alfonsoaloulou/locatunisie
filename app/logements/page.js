import React from 'react'
import LogementList from '@/components/LogementList'
import logements from '@/data/logements';

export default function Logements() {
  return (
    <div>
      <h1 className="text-3xl font-title text-center my-8">Nos Logements</h1>
      <LogementList logements={logements} />
    </div>
  )
}
