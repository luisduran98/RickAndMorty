import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Estilos/Estilos.css";
import rickandmorty from "./Imagenes/rickandmorty.png"
import MensajeEmergente from "../MensajeEmergente/MensajeEmergente";

const ragexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const ragexPassword = /^(?=.*\d).{6,10}$/

function validation(userData){
    const errors = {}
    
    if(!ragexMail.test(userData.email)) errors.email = 'Debe ser un mail valido';
    
    // if(!userData.email) errors.email = 'Esta vacio';
    
    if(userData.email.length > 25) errors.email = 'Superaste los limites';
    
    if(!ragexPassword.test(userData.password)) errors.password = " Debe contener al menos un número y tener una longitud de 6 a 10 caracteres";

    
    
    return errors;
    }
    

    export default function Formulario(props){

    const [userData, setUserData] = useState({
        email: "",
        password: "", 
    });

    const [errors, setErrors] = useState({});

    
    const { mensaje } = props;

    function handleChange(evento){

        const {name,value} = evento.target;

        setUserData({...userData, [name]: value})
    
        setErrors(validation({...userData, [name]: value}));

        }

    function handleSubmit(evento){
        evento.preventDefault();
        props.login(userData)
    }
    

    return(
        <div className="Inicio">

            <div className="Inicio-Dos">

            <form className="Formulario" onSubmit={handleSubmit}>
            <p className="Documentacion" >CORREO</p>
            <input className="Secreto" type="text" placeholder="Correo.." name="email" value={userData.email} onChange={handleChange}/>
            <p className="Error">{errors.email}</p>
            <br/>

            <p className="Documentacion">CONTRASEÑA</p>
            <input className="Secreto" type="password" placeholder="Contraseña.." name="password" value={userData.password} onChange={handleChange}/>
            <p className="Error">{errors.password}</p>
            <br/>

            <button className="Go">ENTRAR</button>
            </form> 

            <img className="rickandmorty" src={rickandmorty} alt="titulo" />
            
            <NavLink className="Registrate"  to='/Registro'>REGISTRATE</NavLink>           

            {mensaje && <MensajeEmergente mensaje={mensaje}/>}

            </div>

        </div>

        
    )
}