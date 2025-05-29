'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  nom: yup.string().min(4, 'Le nom doit avoir au moins 4 caractères').required('Champ obligatoire'),
  email: yup.string().email('Email invalide').required('Champ obligatoire'),
  telephone: yup.string().required('Champ obligatoire'),
  message: yup.string().max(30, 'Message trop long').required('Champ obligatoire'),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log('Formulaire soumis :', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto">
      <input
        {...register('nom')}
        placeholder="Nom"
        className="w-full border border-gray-300 p-2 rounded"
      />
      {errors.nom && <p className="text-red-500 text-sm">{errors.nom.message}</p>}

      <input
        {...register('email')}
        placeholder="Email"
        className="w-full border border-gray-300 p-2 rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <input
        {...register('telephone')}
        placeholder="Téléphone"
        className="w-full border border-gray-300 p-2 rounded"
      />
      {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone.message}</p>}

      <textarea
        {...register('message')}
        placeholder="Message"
        className="w-full border border-gray-300 p-2 rounded"
      ></textarea>
      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
      >
        Envoyer
      </button>
    </form>
  );
}
