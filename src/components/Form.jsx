import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(import.meta.env.VITE_APP_YOUR_SERVICE_ID, import.meta.env.VITE_APP_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_APP_YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  
    return (
    <div> 

      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="user_name" className="form-label">Nombre:</label>
            <input type="text" name="user_name" id="user_name" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="user_contact" className="form-label">Contacto:</label>
            <input type="text" name="user_contact" id="user_contact" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="user_email" className="form-label">Correo Electrónico:</label>
            <input type="email" name="user_email" id="user_email" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="message" className="form-label">Mensaje:</label>
            <textarea name="message" id="message" rows="5" className="form-control"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 ">
            <button type="submit" className="btn  bg-custom my-2">Enviar</button>
          </div>
        </div>
      </form>

    </div>
  )
}
