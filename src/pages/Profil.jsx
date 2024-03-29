import React, { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { OwnCollection } from "../components/OwnCollection/OwnCollection"

export const Profil = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const userAddress = sessionStorage.getItem("userAddress")
        if (!userAddress) {
            navigate("/")
        } 
    }, [navigate])

    const { profil } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [profil])

    return (
        <>
            <OwnCollection />
        </>
    )
}
