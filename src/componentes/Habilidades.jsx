import '../estilos/Habilidades.css';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite } from "react-icons/si";

function Habilidades() {
    // Lista de habilidades para reutilizar
    const habilidades = [
        { icon: <FaHtml5 />, label: "HTML5" },
        { icon: <FaCss3Alt />, label: "CSS3" },
        { icon: <IoLogoJavascript />, label: "JavaScript" },
        { icon: <FaReact />, label: "React" },
        { icon: <SiVite />, label: "Vite" },
        { icon: <FaGithub />, label: "GitHub" },
        { icon: <FaFigma />, label: "Figma" },
    ];

    return (
        <div className="container-logo-home">
            <div className="marquee-wrapper">
                <ul className="habilidades-lista">
                    {habilidades.map((h, i) => (
                        <li key={i}>
                            {h.icon}
                            <p>{h.label}</p>
                        </li>
                    ))}
                </ul>
                <ul className="habilidades-lista">
                    {habilidades.map((h, i) => (
                        <li key={i + habilidades.length}>
                            {h.icon}
                            <p>{h.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Habilidades;
