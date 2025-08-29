# oniriko

Qué se quiere: 
- Un vídeo de la cafetería en el fondo de la página
- Una pestaña de venta de productos (todavía a definir cuáles son). (Hacer un modo admin/trabajador para poder crear/editar productos)
- Una pestaña para la ubicación y horario de la cafetería.
- Una pestaña para el menú de la cafeteria (todavía no sabemos qué hay en el menú) -> cada producto del menú debe tener su foto (todavía no tenemos las fotos).
- Una pestaña con los distintos cursos a impartir (de momento a modo informativo). (Hacer un modo admin/trabajador para poder crear/editar productos).
- El menú principal debe tener una sección explicando la historia de la tienda.
- Deben reflejarse en algún lado de la página las distintas redes sociales de oniriko, con logos nombres de usuario y links.
- Para los pagos, solamente con Tarjeta de crédito o PayPal, Bizum y otros no.
- La estética de todo la página debe ser con colores marrón crema.
- Mediante un qr llegar a la pagina con el menú de la cafetería.

A futuro: 
  - Una pestaña para reservas (Para modo admin/trabajador ¿se podría hacer una forma de acceder a qué reservas se han realizado?)
  - Sistema de reserva y suscripciones
reservas y suscripciones

## Requerimientos
  - Maven (Apache Maven 3.9.1)
  - Docker (Docker version 28.3.2)
  - Node (v22.13.1)
  - Yarn (1.22.22)

## Módulos
  - [oniriko-bbdd](./docs/modelo-bbdd.md): Módulo para scripts de inicialización de la base de datos. Dispone de un Dockerfile que expone el puerto 3306.
  - oniriko-backend: Módulo para el backend, alojado en el puerto. Dispone de un Dockerfile que expone el puerto 8080.
  - oniriko-docker: Módulo con el docker-compose para orquestar la creación de imágenes y contenedores de los distintos módulos.
  - oniriko-frontend: Módulo frontal desarrollado con el framework react-ts. Dispone de un Dockerfile que construye el frontal y lo levanta en un servidor con nginx en el puerto 80.

## Construcción y ejecución
Se requiere de un único comando para la construcción y ejecución de oniriko: `mvn clean install`. 

Este comando creará un compose con 3 contenedores:
    - La base de datos 'oniriko-db' (expuesta en el puerto 3306).
    - El back-end, un proyecto de java spring-boot (expuesto en el puerto 8080).
    - El front-end, un proyecto hecho en react-ts (expuesto en el puerto 80).
    
### Páginas de referencia
  - [Ambu](https://ambu.coffee)
  - [East Crema Coffee](https://eastcrema.com/pages/suscripciones)
  - [CatLove](https://catlovecoffee.com)
