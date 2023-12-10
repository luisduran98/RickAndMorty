import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch} from "react-redux";
import { usuario } from './Redux/actions';
import { actualizarFavoritos } from './Redux/actions';
import { actualizarPersonajes } from './Redux/actions';
import axios from 'axios';
import General from "./Estilos/General.css";
import Cards from "./Componentes/Cards/Cards";
import Navegador from "./Componentes/Navegador/Navegador";
import Formulario from './Componentes/Formulario/Formulario';
import SobreMi from './Componentes/SobreMi/SobreMi';
import Detalle from './Componentes/Detalle/Detalle';
import Registro from './Componentes/Registro/Registro';
import CardsFav from './Componentes/CardsFav/CardsFav';


function App() {
  const [access, setAccess] = useState(false);
  const [mensaje,setMensaje]= useState("");
  const [mensajeR,setMensajeR] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname === '/';
  const register = location.pathname === '/Registro';

  useEffect(() => {
    if (!access && !homePage && location.pathname !== '/Registro') {
      navigate('/');
    }
  }, [access, homePage, location.pathname, navigate]);

  const login = async (userData) => {
    try {
      const credenciales = await axios.post("http://localhost:3001/login", {
        email: userData.email,
        password: userData.password
      });
      if (credenciales.data.access) {
        credenciales.data.favoritos && dispatch(actualizarFavoritos(credenciales.data.favoritos))
        credenciales.data.personajes && dispatch(actualizarPersonajes(credenciales.data.personajes))
        dispatch(usuario(credenciales.data.userId))
        setAccess(true);
        navigate('/Principal');
      }
    } catch (error) {
      setMensaje(error.response.data.error)
    }
  };

  const verificador = async(userData)=>{
    try {
      const credenciales = await axios.post("http://localhost:3001/login/register", {
        email: userData.email,
        password: userData.password
      });

      if (credenciales.data.register) {
          setMensajeR(credenciales.data.register) 
      }
      
    } catch (error) {
          setMensajeR(error.response.data.error) 
    }
  
  }

  return (
    <div className="Fondo">
      {!homePage && !register && <Navegador />}

      <Routes>
        <Route path='/' element={<Formulario login={login} mensaje={mensaje}/>} />
        <Route path="/Principal" element={<Cards />} />
        <Route path="/SobreMi" element={<SobreMi />} />
        <Route path="/Detalle/:id" element={<Detalle />} />
        <Route path="/Registro" element={<Registro verificador={verificador} mensajeR={mensajeR}/>} />
        <Route path="/Favoritos" element={<CardsFav />} />
      </Routes>
    </div>
  );
}

export default App;






