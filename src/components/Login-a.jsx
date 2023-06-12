import React from "react";
import "../styles/styles.css";

function Login_a(){

    const showLogin = () => {
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("registerForm").style.display = "none";
        document.querySelector(".options button:first-child").classList.add("active");
        document.querySelector(".options button:last-child").classList.remove("active");
    }

    const showRegister = () => {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
        document.querySelector(".options button:first-child").classList.remove("active");
        document.querySelector(".options button:last-child").classList.add("active");
    }

    return(
        <div className="container">
            <div className="box">
                <div className="options">
                    <button className="active" onClick={showLogin}>Iniciar Sesión</button>
                    <button onClick={showRegister}>Registrarse</button>
                </div>
                <form id="loginForm" className="form" style={{display: "block"}}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Contraseña" required />
                    <button className="submit-button">Enviar</button>
                </form>

                <form id="registerForm" className="form" style={{display: "none"}}>
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder="Apellido Paterno" required />
                    <input type="text" placeholder="Apellido Materno" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Contraseña" required />
                    <button className="submit-button">Enviar</button>
                </form>
            </div>
        </div>
    );
}
export default Login_a;