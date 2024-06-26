import React from 'react';
import imgRelajante from  '../assets/03.jpeg'
import imgDes from  '../assets/02.jpeg'
import imgLomi from  '../assets/13.jpeg'
import imgThai from  '../assets/17.jpeg'
import imgEmb from  '../assets/15.jpeg'
import imgPodal from  '../assets/16.jpeg'
import imgVent from  '../assets/14.jpeg'

export const Masaje = () => {
    return (
        <div className=' bg-custom2'>
            <section>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src={imgRelajante} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Masaje Relajante</h5>
                                    <p className="card-text">Consiste en la realización de maniobras superficiales en las que la intensidad de la presión es suave y el ritmo lento y reiterativo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={imgDes} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Masaje Deep Tissue</h5>
                                    <p className="card-text">Es una técnica de terapia manual, que consiste en emplear maniobras profundas e intensas, que van dirigidas a zonas de dolor y que buscan eliminar las contracturas y puntos gatillo, ayudando a recuperar la función normal del músculo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src={imgLomi} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Masaje Lomi Lomi</h5>
                                    <p className="card-text">Durante un masaje Lomi-Lomi o masaje hawaiano , se amasa todo el cuerpo y uno se siente casi majestuoso: los movimientos fluidos de la cabeza a los pies y el uso del cuerpo por parte del masajista garantizan una agradable relajación.</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={imgThai} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Masaje Thailandes</h5>
                                    <p className="card-text">El masaje thai reúne las técnicas de 3 disciplinas de tratamiento tradicional: Amasamiento de los músculos. Manipulación del esqueleto o quiropráctica (osteopatía). Digitopuntura, presionando sobre ciertos puntos de acupuntura o líneas energéticas.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src={imgEmb} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Masaje Embarazadas</h5>
                                    <p className="card-text">La embarazada puede someterse a masajes terapéuticos y a masajes relajantes, siempre a partir del 2º trimestre de gestación. Los masajes terapéuticos pueden aliviar dolores: no olvidemos que el 71% de las embarazadas sufre dolor lumbar, el 46% dolor ciático y el 65% dolor pélvico.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={imgPodal} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Reflexologia Podal</h5>
                                    <p className="card-text">
                                        La reflexología podal es un tratamiento que se practica desde hace siglos y que se enfoca en estimular determinados puntos reflejos que permiten aumentar la energía vital y la capacidad de autocuración, entre otras cosas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        
                        <div className="col">
                            <div className="card h-100">
                                <img src={imgVent} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Masaje con Ventosa</h5>
                                    <p className="card-text">
                                        El cupping (por cup, ‘taza’ en inglés) o masaje de ventosas es una terapia alternativa milenaria que se aplica como parte de un tratamiento corporal. Es bastante antigua y se originó en China, aunque los egipcios también la conocían y usaban.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 
                <div className="text-center my-4">
      <a href="https://wa.me/34687262643" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">
        <i className="bi bi-whatsapp me-2"></i> Contáctanos por WhatsApp
      </a>
    </div>
            </section>
        </div>
    );
};
