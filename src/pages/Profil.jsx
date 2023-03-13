import React from 'react';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import OwnCollection from '../components/OwnCollection/OwnCollection';

export const Profil = () => {
  const naviagte = useNavigate();
  
  useEffect(() => {
    const userAddress = localStorage.getItem("userAddress");
    if (!userAddress) {
      naviagte("/"); // rediriger vers la page de connexion
    }
  }, [naviagte]);

  return (
    <>
    <OwnCollection />
  </>
  )
}
