import Yo from "./Imagenes/Yo.jpeg";
import Argentina from "./Imagenes/Flag_of_Argentina.svg";
import reactImagen from "./Imagenes/8666372_react_icon.svg";
import reduxImagen from "./Imagenes/4691205_redux_icon.svg";
import jsImagen from "./Imagenes/8666390_js_square_icon.svg";
import nodeImagen from "./Imagenes/8547046_node_js_icon.svg";
import cssImagen from "./Imagenes/7422531_css3_css_file_development_icon.svg";
import postgreImagen from "./Imagenes/11120626_fi_brands_postgre_icon.svg";

import "./Estilos/Estilos.css";
export default function SobreMi(){
    return(
        <div className="SobreMi-Todo">

            <div className="SobreMi">

                <div className="SobreMi-Dos">
                    <span className="SobreMi-Nombre">Luis Duran</span>
                    <img className="Argentina" src={Argentina} />
                    <img className="SobreMi-Imagen" src={Yo}/>
                </div>

                <div className="SobreMi-Tres">
                    <p className="SobreMi-Texto">Hola!, Este es mi proyecto de Rick and Morty, aca una muestra de como implemente las siguientes tecnologias, en el front: React y Redux y en el Back: Node,Express,Sequelize,PostgresSQL</p>
                </div>

            </div>

            <div className="react-uno">
                <img  className="react" src={reactImagen}/>
            </div>   

            <div className="redux-uno">
                <img className="redux" src={reduxImagen}/>
            </div>

            <div className="js-uno">
                <img className="js" src={jsImagen}/>
            </div>

            <div className="css-uno"> 
                <img className="css" src={cssImagen}/>
            </div>

            <div className="node-uno">
                <img className="node" src={nodeImagen}/>
            </div>

            <div className="postgre-uno">
                <img className="postgre" src={postgreImagen}/>
            </div>

            {/* <div className="herramientas">Mis herramientas</div> */}
            

        </div>
        
    )
}