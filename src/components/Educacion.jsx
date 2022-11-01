import React from "react";
import '@styles/Educacion.scss'

const Educacion = () => {
    return(
        <>
            <h3>Educacion</h3>

            <ul>

                <li id="Cobaem">
                    Cobaem 10 Ecatepec Norte <br/>
                    <span>Informatica</span>
                    <p>Agosto 2010 - Agosto 2013</p>
                </li>

                <li id="UTTEC">
                    Universidad Tecnologica de Tecamac <br/>
                    <span>
                        Titulo en: Tecnico superor universitario en Mecatronica Area Automatizacion <br/>
                        Titulo en: Ingenieria en Mecatronica
                    </span>
                    <p>septiembre 2013 - Agosto 2018</p>
                </li>

                <li id="Platzi">
                    Cursos en linea Platzi <br/>
                    <span>Front End Developer</span>
                    <p>Julio 2022 - Actual</p>
                </li>

            </ul>
        </>
    );
};

export default Educacion;