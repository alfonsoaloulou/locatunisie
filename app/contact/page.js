import ContactForm from "@/components/ContactForm";
import React from "react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-title text-center mb-8">Contactez-nous</h1>
      <ContactForm />
    </div>
  );
}
