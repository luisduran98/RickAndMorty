import React, { useState, useEffect } from 'react';
import "./Estilos/Estilos.css"

const MensajeEmergente = ({ mensaje }) => {
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
    <div className="mensaje-emergente">
      <button className="mensaje-boton" onClick={cerrarMensajeHandler}>X</button>
      <p className='mensaje-texto'>{mensaje}</p>
    </div>
  );
};

export default MensajeEmergente;
