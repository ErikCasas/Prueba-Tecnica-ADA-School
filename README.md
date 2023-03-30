# Prueba-Tecnica-ADA-School

# Pedidos de Tickets de Bus


Este proyecto es una aplicación full stack construida con el stack MERN, que permite a los usuarios pedir tickets de bus. El stack MERN consta de las siguientes tecnologías:

- **Mongo**: una base de datos NoSQL que se utiliza para almacenar datos.
- **Express**: un marco de aplicación web que se utiliza para construir la API RESTful.
- **React**: una biblioteca de JavaScript para construir la interfaz de usuario.
- **Node**: un entorno de tiempo de ejecución de JavaScript que se utiliza para ejecutar el servidor.

## Back end

- **Usuario Admin**: 
- **Usuario Client**:

## Características principales
La aplicación permite a los usuarios pedir tickets de bus y se garantiza la seguridad y la privacidad de la información del usuario mediante la autenticación y la encriptación de la información antes de guardarla en la base de datos. Los endpoints proporcionan diferentes tipos de solicitudes HTTP, como GET, PUT y POST, y se validan las solicitudes antes de procesarlas. La aplicación también proporciona una interfaz para que los administradores puedan ver la información de los tickets y realizar actualizaciones.

## Arquitectura
El back end de la aplicación se construye con Express y TypeScript, y se utilizan middlewares como morgan para proporcionar una mayor seguridad y registro de solicitudes HTTP. La autenticación de usuario se realiza con JWT, y antes de guardar la información en la base de datos, se encripta utilizando bcript. Los usuarios se dividen en dos categorías, los clientes y los administradores, y se validan los tokens y se decodifican a través de middlewares reutilizables.

Se ha dado prioridad a la modularización y a la organización de archivos para mantener un mayor orden y buenas prácticas en el código.

## Licencias y derechos de autor
Este proyecto se distribuye bajo la licencia [Erik](https://github.com/ErikCasas).
