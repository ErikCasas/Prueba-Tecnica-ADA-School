# Prueba-Tecnica-ADA-School

# Pedidos de Tickets de Bus


Este proyecto es una aplicación full stack construida con el stack MERN, que permite a los usuarios pedir tickets de bus. El stack MERN consta de las siguientes tecnologías:

- **Mongo**: una base de datos NoSQL que se utiliza para almacenar datos.
- **Express**: un marco de aplicación web que se utiliza para construir la API RESTful.
- **React**: una biblioteca de JavaScript para construir la interfaz de usuario.
- **Node**: un entorno de tiempo de ejecución de JavaScript que se utiliza para ejecutar el servidor.

# Instrucciones para iniciar el proyecto

Para iniciar el proyecto, sigue los siguientes pasos:

1. Descarga el proyecto desde el repositorio en GitHub.

2. Descomprime el archivo y navega hasta la carpeta raíz del proyecto.

3. Abre dos terminales en la carpeta raíz del proyecto. Una terminal será para la carpeta "api" y otra para la carpeta "cliente".

4. En la terminal correspondiente a la carpeta "api", escribe el siguiente comando para compilar el proyecto de TypeScript:

npm install

npm run tsc


Este comando compilará el proyecto TypeScript y generará la carpeta "dist" con los archivos JavaScript compilados.

5. Luego, en la misma terminal, escribe el siguiente comando para iniciar el servidor:

npm run dev

Este comando iniciará el servidor en modo de desarrollo y mostrará la URL del servidor en la terminal.

6. En la terminal correspondiente a la carpeta "cliente", escribe el siguiente comando para compilar el proyecto de React:

npm install

npm run build

Este comando compilará el proyecto React y generará la carpeta "build" con los archivos compilados.

7. Con el servidor de la API en ejecución y la compilación de la aplicación React terminada, abre un navegador web e ingresa la URL del servidor para comenzar a usar la aplicación.

Con estos pasos, habrás iniciado el proyecto y tendrás la aplicación en ejecución en tu navegador. ¡Espero que te sean útiles estas instrucciones!

- **Usuario Admin**: erik.h.1002@gmail.com **Constraseña**: 123 
- **Usuario Client**: jperez@hotmail.com **Constraseña**: p4ssw0rd  o tambien puedes crearlo

## Back end


## Características principales
La aplicación permite a los usuarios pedir tickets de bus y se garantiza la seguridad y la privacidad de la información del usuario mediante la autenticación y la encriptación de la información antes de guardarla en la base de datos. Los endpoints proporcionan diferentes tipos de solicitudes HTTP, como GET, PUT y POST, y se validan las solicitudes antes de procesarlas. La aplicación también proporciona una interfaz para que los administradores puedan ver la información de los tickets y realizar actualizaciones.

## Arquitectura
El back end de la aplicación se construye con Express y TypeScript, y se utilizan middlewares como morgan para proporcionar una mayor seguridad y registro de solicitudes HTTP. La autenticación de usuario se realiza con JWT, y antes de guardar la información en la base de datos, se encripta utilizando bcript. Los usuarios se dividen en dos categorías, los clientes y los administradores, y se validan los tokens y se decodifican a través de middlewares reutilizables.

Se ha dado prioridad a la modularización y a la organización de archivos para mantener un mayor orden y buenas prácticas en el código.


# Características del Front End

El sitio web cuenta con las siguientes tecnologías y funcionalidades:

## Tecnologías

<img src="https://th.bing.com/th/id/R.6ef06b708d575bf5f88911ade2e6882c?rik=dx0Jue55sM3GXQ&pid=ImgRaw&r=0" alt="JWT" width="300px">

- **Axios**: es una biblioteca de JavaScript que se utiliza para realizar solicitudes HTTP desde el navegador o Node.js.

- **Styled Components**: es una biblioteca de JavaScript que se utiliza para escribir CSS en JavaScript.

<img src="https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png" alt="Bootstrap" width="100px">

## Funcionalidades

- Formulario de inicio de sesión estable: los usuarios pueden iniciar sesión en el sitio web y su sesión permanecerá activa incluso si actualizan la página.

- Distintos formularios controlados: los formularios disponibles en el sitio son:
    - Inicio de sesión
    - Registro
    - Crear un nuevo ticket (solo para administradores)

- Protección de rutas: si un usuario no está autenticado o no tiene permiso para acceder a ciertas páginas, será redirigido a una página correspondiente. Por ejemplo, si un usuario no está autenticado y trata de acceder a la página de inicio, será redirigido a la página de inicio de sesión.

- Renderizado condicional: las opciones que solo están disponibles para los usuarios con permisos de administrador no se muestran a los usuarios que no tienen estos permisos.

- Protección de sesión: la sesión del usuario se protege mediante el uso de un token proporcionado por el back-end al iniciar sesión.

- Actualización en tiempo real: cuando un usuario adquiere un ticket, la información se actualiza en el back-end y en el front-end, lo que permite ver los cambios en tiempo real.

## Licencias y derechos de autor
Este proyecto se distribuye bajo la licencia [Erik](https://github.com/ErikCasas).
