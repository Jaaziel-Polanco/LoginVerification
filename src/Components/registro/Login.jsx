import React, { useState } from "react";

//modulos de firebase
import appFirebase from '/escritorio/LoginReact/src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from "../Home/Home";
import Logeo from "./Logeo";
const auth = getAuth(appFirebase)

export default function Login() {

    const [usuario, setUsuario] = useState(null)
    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUsuario(usuarioFirebase)
        }
        else {
            setUsuario(null)
        }
    })



    return (
        <>
            {usuario ? <Home nombreUsuario={usuario.displayName} /> : <Logeo />}
        </>
    );
}