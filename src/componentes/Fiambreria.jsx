
import Header from "./Header";
import Proyectos from "./Proyectos";


function Numerosecreto() {
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo="Página corporativa"
                    empresa="El Carmelo charcutería"
                    texto="Sitio web para un local de charcutería artesanal. El dueño quería una página sencilla con un Home donde se resuma un poco información sobre ellos, algunas imágenes del local, la ubicación con googlemaps y por sobre todo botones y enlaces que lleven al Whatsapp e Instagram. A su vez una sección de contacto donde esten disponibles todos los medios para comunicarse. El diseño se ideó en conjunto con el cliente y los skills que se utilizaron fueron HTML, CSS, JavaScript y React-Vite. Para el Hosting se conectó a Firebase aprovechando su función gratuita ya que es un pequeño negocio local."
                    deploy="https://el-carmelo-charcuteria.web.app/"
                    imagen="fiambreria"
                    repo="El-Carmelo-charcuteria"
                />
            </div>


        </div>
    )
}

export default Numerosecreto;