import React from 'react';
import { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { OwnCollection } from '../components/OwnCollection/OwnCollection';

export const Profil = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const userAddress = localStorage.getItem("userAddress");
    // if (!userAddress) {
    //   navigate("/"); // rediriger vers la page de connexion
    // }
  }, [navigate]);

  const { profil } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [profil]);

  return (
    <>
      <OwnCollection />
    </>
  )
}
