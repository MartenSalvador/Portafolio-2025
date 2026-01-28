import { useForm, ValidationError } from '@formspree/react';
import '../estilos/Contacto.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xgvlewzw");
  if (state.succeeded) {
      return (
        <div className='container-mensaje-enviado'>
            <p>Mensaje enviado</p>
            <Link className="link-footer boton-mensaje-enviado" to="/">Inicio</Link>
        </div>
      );
      
  }else {
    return (
    <form onSubmit={handleSubmit} className='contacto-form'>
        <label htmlFor="name">
        {t("contactForm.name")}
      </label>
      <input
        className='contacto-input'
        id="name"
        type="name" 
        name="name"
        placeholder={t("contactForm.name")}
      />
      <ValidationError 
        prefix="text" 
        field="text"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        className='contacto-input'
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <label htmlFor="message">
            {t("contactForm.message")}
        </label>
      <textarea
        className='contacto-input mensaje'
        id="message"
        name="message"
        placeholder={t("contactForm.message")}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='contacto-boton' type="submit" disabled={state.submitting}>
        {t("contactForm.send")}
      </button>
    </form>
  );
}
  }
  


function App() {
  return (
    <ContactForm />
  );
}

export default App;