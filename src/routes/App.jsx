import React from 'react';
import Layout from '@containers/Layout';
import DatosDeContacto from '@components/DatosDeContacto';
import Educacion from '@components/Educacion';
import ExperienciaProfecional from '@components/ExperienciaProfecional';
import Habilidades from '@components/Habilidades';
import Resumen from '@components/Resumen';
import Referencias from '@components/Referencias';
import '@styles/global.scss';

const foto = 'https://images.pexels.com/photos/13514391/pexels-photo-13514391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const App = () => {
    return (
        <>
            <Layout>
                <div className='container pt-1'>
                    <div className='row'>
                        <div className='col-4'>
                            <DatosDeContacto />
                            <Educacion />
                        </div>
                        <div className='col-4'>
                            <img id='foto' src={foto} />
                            <Resumen/>
                            <Referencias/>
                        </div>
                        <div className='col-4'>
                            <ExperienciaProfecional />
                            <Habilidades/>
                        </div>
                    </div>
                </div>
            </Layout>
		</>
    );
};

export default App;