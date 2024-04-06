import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import appFirebase from '../../credenciales';
import { Button } from 'antd';

const auth = getAuth(appFirebase);

const Home = ({ nombreUsuario }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error('Error al cerrar la sesión', error);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                    Bienvenido/@, <span className="text-purple-600">{nombreUsuario}</span>
                </h1>
                <p className="text-gray-600 mb-6">
                    Esperamos que disfrutes como te voy a hakear el correo 😘
                </p>
                <Button
                    onClick={handleSignOut}
                    className="text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                >
                    Cerrar sesión
                </Button>
            </div>
        </div>
    );
};

export default Home;

