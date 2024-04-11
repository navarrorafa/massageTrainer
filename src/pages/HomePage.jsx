import React from 'react'

import homeBg from '../assets/12.jpeg'
import homeMs1 from '../assets/05.jpeg'
import homeMs2 from '../assets/10.jpeg'
import homeT1 from '../assets/18.jpeg'
import homeT2 from '../assets/19.jpeg'

import { IconsContacto } from '../components/IconsContacto'




export const HomePage = () => {
    return (
        <div>

            <section style={{ backgroundImage: `url(${homeBg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 className="text-center" style={{ fontSize: '5.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Massage Trainer Ibiza</h1>
                <h3 className="text-center" style={{ fontSize: '3.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Sergio Yrigyen</h3>
                <h2 className="text-center" style={{ fontSize: '2rem', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Quiromasajista / Trainer</h2>
            </section>

            <section>

                <p className='text-center m-5 fs-2'>
                    Bienvenido a Massage Trainer Ibiza, soy Sergio Yrigoyen Pérez. Licenciado en actividad física y deporte, desarrolle mi carrera en el mundo del fitness y el entrenamiento físico. Desde hace 30 años me dedico profesionalmente al bienestar y al cuidado del cuerpo.
                </p>

                <p className='text-center m-5 fs-2'>
                    En el año 2008 comencé a desarrollarme como masajista hasta crear Massage Trainer Ibiza, una plataforma para el bienestar integral, combinando el masaje y la actividad física personalizada.
                </p>

                <p className='text-center m-5 fs-2'>
                    Massage Trainer Ibiza te ofrece una experiencia de masaje excepcional utilizando diferentes técnicas, que aprendí en mi vasta formación:
                </p>

                <ul className='text-start m-auto p fs-2'>
                <li>Masajes Deep tissue</li>
                <li>Masaje relajante</li>
                <li>Masajes lomi lomi</li>
                <li>Masaje tailandés</li>
                <li>Reflexología podal</li>
                <li>Masajes para embarazadas</li>
            </ul>

                <p className='text-center m-5 fs-2'>
                    Trabajamos de manera consciente, brindando acompañamientos integrales para tu bienestar. Es por eso que también ofrecemos:
                </p>

                <ul className='text- m-auto  fs-2'>
                <li>Entrenamiento físico personalizado</li>
                <li>Entrenamiento físico acuático (lesiones / adultos mayores)</li>
                <li>Clases recreativas acuáticas (adultos mayores y niños)</li>
            </ul>

                <p className='text-center m-5 fs-2'>
                    Te invitamos a descubrir nuestro servicio personalizado y de alta calidad.
                </p>

                <p className='text-center m-5 fs-2'>
                    ¡Bienvenidos a Massage Trainer Ibiza, el refugio de bienestar que transformará su vida!
                </p>



            </section >

            <section className='bg-secondary bg-opacity-75'>
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-3">
                <img src={homeMs1} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-12 col-md-6 mb-3">
                <img src={homeMs2} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-12 col-md-6 mb-3">
                <img src={homeT1} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-12 col-md-6 mb-3">
                <img src={homeT2} alt="" className="img-fluid w-100" />
            </div>
        </div>
    </div>
</section>



            <section>

                <p className='fs-1 text-center p5'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, ab, delectus corrupti omnis architecto nesciunt voluptatum incidunt officiis odit molestiae at natus tenetur? Enim sed eveniet dolor at animi tempore.</p>

            </section>

        </div >
    )
}
