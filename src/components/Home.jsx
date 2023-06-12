
import React from "react";
import "../styles/styles.css";

function Home(){
    return(
        <div>
            <header>
                <img id="logo" src="../../public/images/imgfondo.png" alt="LetterWrite"/>
                <nav>
                <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Conócenos</a></li>
                <li><a href="#">Letras</a></li>
                <li><a href="./login-a">Login</a></li> {/*Login de los alumnos*/}
                </ul>
                </nav>
            </header>
            <div class="divimagenfondo">
                <div class="content">
                    <h1>Aprende divirtiéndote...</h1>
                    <p>Ayuda a tus hijos a mejorar sus habilidades</p>
                    <button class="start-button">Comenzar</button>
                </div>
            </div>
        </div>
    );
}

export default Home;