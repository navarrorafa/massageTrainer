import React from 'react';
import { Form } from '../components/Form'; // Importa o componente Form

export const Contacto = () => {
  return (
    <div className="bg-custom2 py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contacto</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-4">
            {/* Renderiza o componente Form */}
            <Form />
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <div className="mb-3">
                <a href="mailto:sergioyrigoyen@gmail.com" className="text-decoration-none text-dark d-block mb-2 fs-4">
                  <i className="bi bi-envelope-fill fs-1"></i> sergioyrigoyen@gmail.com
                </a>
                <a href="https://www.instagram.com/massage_trainer_ibiza" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark d-block mb-2 fs-4">
                  <i className="bi bi-instagram fs-1"></i> massage_trainer_ibiza
                </a>
                <a href="https://www.tiktok.com/@massage_trainer_ibiza" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark d-block mb-2 fs-4">
                  <i className="bi bi-tiktok fs-1"></i> massage_trainer_ibiza
                </a>
                <a href="https://wa.me/34687262643" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark d-block fs-4">
                  <i className="bi bi-whatsapp fs-1"></i> +34 687 26 26 43
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
