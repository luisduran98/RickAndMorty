import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useLocation, useNavigate } from 'react-router-dom';
import MensajeRegistro from "../MensajeRegistro/MensajeRegistro";
import "../Formulario/Estilos/Estilos.css";

const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{6,10}$/;

function validation(userData) {
  const errors = {};

  if (!regexMail.test(userData.email)) errors.email = 'debe ser un mail valido';

  if (userData.email.length > 25) errors.email = 'superaste los limites';

  if (!regexPassword.test(userData.password)) errors.password = " Debe contener al menos un número y tener una longitud de 6 a 10 caracteres";

  return errors;
}

export default function Registro(props) {

  // const navigate = useNavigate();
  // const location = useLocation();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  let defecto = false;

  function handleChange(evento) {
    const { name, value } = evento.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    if (errors.email || errors.password) {
      setShowMessage(true);
    } else {
      props.verificador(userData);
    }
  }

  return (
    <div className="Inicio">
      <div className="Inicio-Dos">
        <form className="Formulario" onSubmit={handleSubmit}>
          <p className="Documentacion">CORREO</p>
          <input className="Secreto" type="text" placeholder="Email.." name="email" value={userData.email} onChange={handleChange} />
          <p className="Error">{errors.email}</p>
          <br />

          <p className="Documentacion">CONTRASEÑA</p>
          <input className="Secreto" type="password" placeholder="Password.." name="password" value={userData.password} onChange={handleChange} />
          <p className="Error">{errors.password}</p>
          <br />

          <button className="Go">Registrarme</button>

          <Link to={`/`}><button className="home">Inicio</button></Link> 
        </form>
      </div>

      {showMessage && (errors.email || errors.password) && <MensajeRegistro mensaje="Sigue las Instrucciones" />}
      {!defecto && <MensajeRegistro mensaje={props.mensajeR} />}
    </div>
  );
}
