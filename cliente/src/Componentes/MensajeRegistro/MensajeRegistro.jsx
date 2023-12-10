import React, { useState, useEffect } from 'react';
import "./Estilos/Estilos.css"

const MensajeRegistro = ({ mensaje }) => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  useEffect(() => {
    if (mensaje) {
      setMostrarMensaje(true);
    }
  }, [mensaje]);

  const cerrarMensajeHandler = () => {
    setMostrarMensaje(false);
  };

  return mostrarMensaje && mensaje && (
    <div className="Registro-emergente">
      <button className="Registro-boton" onClick={cerrarMensajeHandler}>X</button>
      <p className='Registro-texto'>{mensaje}</p>
    </div>
  );
};

export default MensajeRegistro;