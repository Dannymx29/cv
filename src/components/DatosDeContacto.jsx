import React from "react";
import Correo from '@iconos/email.png';
import Whatsapp from '@iconos/whatsapp.png';
import telegram from '@iconos/telegram.png';
import Github from '@iconos/github.png';
import '@styles/DatosDeContacto.scss';

const DatosDeContacto = () => {
    return(
        <>
            <h3>Contacto</h3>

            <ul>
                <li>
                    <img src={Correo} alt="Correo electronico" /> Correo electronico: "bran.dan.her.gar@gmail.com"
                </li>

                <li>
                    <img src={Whatsapp} alt="WhatsApp" /> WhatsApp: 5573956346
                </li>

                <li>
                    <img src={telegram} alt="Telegram" /> Telegram: 5573956346</li>
                <li>
                <img src={Github} alt="GitHub" /> GitHub: <a href="https://github.com/Dannymx29" target="_blank" >Dannymx29</a>
                </li>
            </ul>
        </>
    );
};

export default DatosDeContacto;