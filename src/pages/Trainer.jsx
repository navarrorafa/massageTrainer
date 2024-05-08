import React from 'react';
import homeT1 from '../assets/18.jpeg'
import homeT2 from '../assets/19.jpeg'
import acquaImg from '../assets/20.jpeg'

export const Trainer = () => {
  return (
    <div className='bg-custom2'>

      <section className="py-5" >
        <div className="container">
          <h2 className="text-center mb-5 display-4">Profesor de Natación</h2>
          <div className="row">
            <div className="col-md-12 mb-4">
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={homeT1} alt="Descripción de la imagen" className="img-fluid mb-4" />
            </div>
            <div className="col-md-6">
              <img src={homeT2} alt="Descripción de la imagen" className="img-fluid mb-4" />
            </div>
            <div className="col-md-6 mx-auto">
              <p className="text-center fs-5">
                Con amplia experiencia y pasión por la enseñanza acuática, te ofrezco clases de natación adaptadas a todas las edades y niveles. Mi enfoque va más allá de la técnica; también promuevo un ambiente seguro y divertido para que todos puedan disfrutar del agua y aprender a nadar con confianza.
              </p>
              <ul className="list-group text-center fs-5 list-unstyled">
                <li className="">Clases de natación</li>
                <li className="">Particulares (niños, adultos)</li>
                <li className="">Actividades recreativas</li>
                <li className="">Entrenamiento terapéutico</li>
                <li className="">Iniciación a la natación</li>
                <li className="">Perfeccionamiento técnico</li>
              </ul>
            </div>
          </div>
        </div>

         
        <div className="text-center my-4">
      <a href="https://wa.me/seunumerodetelefono" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">
        <i className="bi bi-whatsapp me-2"></i> Contáctanos por WhatsApp
      </a>
    </div>

      </section>

      <section className="py-5" >
        <div className="container">
          <h2 className="text-center mb-5 display-4">Aqua Gym</h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <img src={acquaImg} alt="Descripción de la imagen" className="img-fluid mb-4" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <p className='text-center fs-5'>
                Sesiones de entrenamiento acuático grupales, una opción completa y divertida para mejorar tu bienestar físico y mental. Juntos, participaremos en una combinación de ejercicios aeróbicos, de resistencia y recreativos, adaptados a tus necesidades y objetivos. ¡Sumérgete en esta experiencia refrescante y fortalecedora en la piscina o en aguas poco profundas y alcanza tus metas de forma divertida y efectiva!
              </p>
            </div>
          </div>
        </div>

         
        <div className="text-center my-4">
      <a href="https://wa.me/seunumerodetelefono" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">
        <i className="bi bi-whatsapp me-2"></i> Contáctanos por WhatsApp
      </a>
    </div>
    
      </section>
    </div>
  );
};
