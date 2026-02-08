import '../estilos/Contacto.css';
import { useTranslation } from "react-i18next";
import Header from './Header'
import Redes from './Redes'
import ContactForm from './ContactForm';

function Contacto() {
  const { t } = useTranslation();
  return (
    <div className='contacto-container'>
      <div className='contacto-container-form'>
        <h1 className='contacto-titulo'>{t("contact.title")}</h1>
        <div className="barra"></div>

        <ContactForm />
        <Redes />
      </div>

    </div>
  );
}



export default Contacto;



