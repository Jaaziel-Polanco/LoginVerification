import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../assets/errorHomero.jpg'

function Error() {
  return (

    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl font-medium text-gray-600">Página no encontrada</p>
      <img
        src={error}
        className="w-96 h-96 mt-8"
      />
      <Link
        to="/"
        className="inline-block px-6 py-3 mt-12 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default Error
