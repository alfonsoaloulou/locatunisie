'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  nom: yup.string().required('Le nom est obligatoire').min(5, 'Min 5 caractères'),
  telephone: yup
    .string()
    .required('Le téléphone est obligatoire')
    .matches(/^[0-9]{8}$/, 'Le numéro doit contenir exactement 8 chiffres'),
  password: yup.string().required('Mot de passe requis').min(6, 'Min 6 caractères'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Les mots de passe ne correspondent pas'),
  accept: yup.bool().oneOf([true], 'Vous devez accepter les conditions'),
});

export default function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Formulaire soumis :', data);
    alert('Inscription réussie');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-title text-[--primary] mb-4">Inscription</h2>

      <label className="block">Nom</label>
      <input {...register('nom')} className="border p-2 w-full mb-1" />
      <p className="text-red-500 text-sm">{errors.nom?.message}</p>

      <label className="block mt-2">Téléphone</label>
      <input {...register('telephone')} className="border p-2 w-full mb-1" />
      <p className="text-red-500 text-sm">{errors.telephone?.message}</p>

      <label className="block mt-2">Mot de passe</label>
      <input type="password" {...register('password')} className="border p-2 w-full mb-1" />
      <p className="text-red-500 text-sm">{errors.password?.message}</p>

      <label className="block mt-2">Confirmation du mot de passe</label>
      <input type="password" {...register('confirmPassword')} className="border p-2 w-full mb-1" />
      <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

      <div className="flex items-center mt-4">
        <input type="checkbox" {...register('accept')} className="mr-2" />
        <label>J'accepte les conditions</label>
      </div>
      <p className="text-red-500 text-sm">{errors.accept?.message}</p>

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
      >
        S’inscrire
      </button>
    </form>
  );
}
