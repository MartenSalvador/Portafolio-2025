import Header from "./Header";
import Proyectos from "./Proyectos";
function Troqueles() {
    return (
      <div>
        <Header />
        <div className="experiencia-container">
            <Proyectos 
            titulo="Biblioteca de Troqueles"
            empresa="Imprenta Encabo SRL"
            texto="Este proyecto busca solucionar la organizacion en la imprenta respecto a los troqueles que usa la máquina de stamping y corte. Ya que los troqueles son muchos, y hay estanterias llenas de ellos, esto optimiza el guardado y buscado respectivamente para cuando se lo necesite. Tambien un problema a la hora de la compra de troqueles era que a veces al tener todo tan desorganizado, no sabian las medidas de los troqueles que ya tenian y a veces se compraban troqueles nuevos con medidas que ya existian. Ahora la empresa se asegura de si existe el stock antes de pedir nuevos.
            En principio habia realizado el desarrollo solamente con JavaScript donde la informacion se guardaba localmente, ahora se actualizó el programa con React y se conectó en Firebase para que puedan guardar los datos y lograr abrir la aplicación en cualquier dispositivo y no solamente en la computadora local."
            deploy="https://biblioteca-de-troqueles.web.app/"
            imagen="troqueles"
            repo="Biblioteca-de-Troqueles-Encabo"
        />
        </div>
        

      </div>
    )
  }

  export default Troqueles;