import React from "react";
import { Building2Icon } from 'lucide-react'

export default function Header() {
  return (
    <header className="text-center py-4">
        <h1 className="text-3xl font-title flex items-center justify-center gap-2 text-primary">
          <Building2Icon className="w-8 h-8" />
          LocaTunisie
        </h1>
      </header>
  );
}
