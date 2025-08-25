
import Header from './Header'
import '../estilos/Experiencia.css'
import './Proyectos'
import Proyectos from './Proyectos';


function Experiencia(){
    return(
        <div className='experiencia-container'>
            <Header />
            <div>
                <div>
                    
                    <div className='proyectos-container-empresa'>
                        <h1 className='contacto-titulo'>Proyectos con empresas</h1>
                        <Proyectos 
                        titulo="Administrador de tareas"
                        empresa="Hotel The Niu Crusoe Bremen"
                        texto="Esta app busca resolver la planificación de las tareas del técnico de mantenimiento del hotel que antiguamente se le encomendaban con papelitos y fichas impresas. Administrador de tareas está desarrollado con React-Vite. Permite gestionar tareas, marcar como completadas y eliminar. Tabien cuenta con un apartado que permite generar plantillas de todas las habitaciones, piso por piso para que el empleado pueda ir marcando cada habitacion que haya terminado. La aplicación utiliza Firebase para el almacenamiento."
                        deploy="https://administrador-de-tareas-5e0f1.web.app/"
                        imagen="miniaturaAdmin"
                        repo=""
                        />
                        <Proyectos 
                        titulo="Biblioteca de Troqueles"
                        empresa="Imprenta Encabo SRL"
                        texto="Este proyecto busca solucionar la organizacion en la imprenta respecto a los troqueles que usa la máquina de stamping y corte. Ya que los troqueles son muchos, y hay estanterias llenas de ellos, esto optimiza el guardado y buscado respectivamente para cuando se lo necesite. Tambien un problema a la hora de la compra de troqueles era que a veces al tener todo tan desorganizado, no sabian las medidas de los troqueles que ya tenian y a veces se compraban troqueles nuevos con medidas que ya existian. Ahora la empresa se asegura de si existe el stock antes de pedir nuevos.

                        En principio habia realizado el desarrollo solamente con JavaScript donde la informacion se guardaba localmente, ahora se actualizó el programa con React y se conectó en Firebase para que puedan guardar los datos y lograr abrir la aplicación en cualquier dispositivo y no solamente en la computadora local."
                        deploy="https://biblioteca-de-troqueles.web.app/"
                        imagen="troqueles"
                        repo="https://github.com/MartenSalvador/Biblioteca-de-Troqueles-Encabo"
                        />
                        {/*
                         <Proyectos 
                        titulo="Pagina de cliente"
                        empresa="Mauricio Galera reparaciones"
                        texto="Página web desarrollada para un cliente que se dedica a las reparaciones de computadores, celulares y consolas de juegos. La página está desarrollada con React-Vite. Permite mostrar los servicios que ofrece el cliente, una galería de trabajos realizados y un formulario de contacto para que los clientes puedan solicitar presupuestos o hacer consultas."
                        deploy="https://www.google.com/"
                        imagen="miniaturaAdmin"
                        repo=""
                        />
                        */}
                       


                    </div>

                </div>
                <div className='proyectos-container-empresa'>
                    <h1 className='contacto-titulo'>Proyectos de cursos y bootcamps</h1>
                    <div className='proyectos-container-botcamps'> 
                        <Proyectos 
                        titulo="Aluraflix"
                        empresa="Bootcamp Alura Latam"
                        texto="Proyecto realizado en el bootcamp de Alura Latam, donde se desarrolla una aplicación web para gestionar una lista de películas y series. La aplicación permite a los usuarios agregar nuevas películas o series a la lista, ver detalles de cada una, y eliminar las que ya no desean. Está desarrollado con React y utiliza una API simulada para el almacenamiento de datos."
                        deploy="https://aluraflix-martin.vercel.app/"
                        imagen="aluraflix"
                        repo="https://github.com/MartenSalvador/aluraflix.martin"
                        />
                        <Proyectos 
                        titulo="Orgnanizador de roles"
                        empresa="Bootcamp Alura Latam"
                        texto="Proyecto para organizar roles y responsabilidades dentro de un equipo de trabajo. La aplicación permite a los usuarios crear equipos, asignar roles y responsabilidades a cada miembro del equipo, y gestionar las tareas asociadas a cada rol. Está desarrollado con JavaScript, HTML y CSS. La aplicación utiliza LocalStorage para el almacenamiento de datos."
                        deploy="https://org-black-zeta.vercel.app/"
                        imagen="org"
                        repo="https://github.com/MartenSalvador/org"                        
                        />
                        <Proyectos 
                            titulo="Glosario de alemán"
                            empresa="Challene Alura Latam"
                            texto="Challenge de Alura Latam, que cuenta con un formulario donde el usuario debe ingresar la palabra en español, la palabra en alemán y una url con la imagen. Al apretar en Enviar los datos se almacenan en el archivo json en el server (con API simulada) y muestra una tarjeta en el display con los datos mencionados. Así la persona que esté aprendiendo el idioma puede ir gestionando su aprendizaje de vocabulario. Además el usuario puede buscar tarjetas previamente subidas con una barra de búsqueda y también puede eliminar en el caso que quisiera."
                            deploy="https://martensalvador.github.io/challengeAlura/"
                            imagen="glosario"
                            repo="https://github.com/MartenSalvador/challengeAlura"
                            />
                        <Proyectos 
                            titulo="Encriptador de textos"
                            empresa="Challene Alura Latam"
                            texto="Challenge de Alura Latam, donde el usuario ingresa un texto y se lo encripta. A su vez si el usuario ingresa un texto encriptado con este programa, se puede desencriptar. El programa cumple con las siguientes reglas de encriptación: 'e' es convertida para 'enter' 'i' es convertida para 'imes' 'a' es convertida para 'ai' 'o' es convertida para 'ober' 'u' es convertida para 'ufat' Adicionalmente el programa cuenta con un botón que permite copiar el texto encriptado o desencriptado al portapapeles."
                            deploy="https://martensalvador.github.io/encriptador-challengeAlura/"
                            imagen="encriptador"
                            repo="https://github.com/MartenSalvador/encriptador-challengeAlura"
                            />
                        <Proyectos 
                            titulo="Juego de Piedra, papel y tijeras"
                            empresa="freecodecamp"
                            texto="El clásico juego de piedra, papel y tijeras realizado en freeCodeCamp donde ellos nos brindaban la base con html y css, y los estudiantes aplicabamos la lógica con JavaScript para que el juego funcione de manera correcta. El juego permite al usuario seleccionar entre piedra, papel o tijeras, y luego genera una elección aleatoria para la computadora. El resultado del juego se muestra en pantalla, indicando si el usuario ganó, perdió o empató. Además, el juego lleva un registro del puntaje del usuario y de la computadora."
                            deploy="https://martensalvador.github.io/piedra-papel-tijera.github.io/"
                            imagen="PPT"
                            repo="https://github.com/MartenSalvador/piedra-papel-tijera.github.io"
                            />
                            <Proyectos 
                            titulo="Juego de adivinar el número secreto"
                            empresa="Challenge Alura Latam"
                            texto="Juego de adivinar el número realizado en Alura, aplicando lógica con JavaScript. El usuario debe adivinar un número secreto generado aleatoriamente entre 1 y 10. Tiene un total de 3 intentos para acertar el número. Después de cada intento, el juego proporciona retroalimentación indicando si el número ingresado es demasiado alto, demasiado bajo o correcto. Si el usuario adivina el número dentro de los 10 intentos, gana el juego; de lo contrario, pierde y se revela el número secreto."
                            deploy="https://martensalvador.github.io/juego-adivinar-numero/"
                            imagen="numerosecreto"
                            repo="https://github.com/MartenSalvador/juego-adivinar-numero"
                            />
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}



export default Experiencia;