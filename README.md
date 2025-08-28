# oniriko

## Requerimientos
  - Maven (Apache Maven 3.9.1)
  - Docker (Docker version 28.3.2)
  - Node (v22.13.1)
  - Yarn (1.22.22)

## Módulos
  - oniriko-bd: Módulo para scripts de inicialización de la base de datos. Dispone de un Dockerfile que expone el puerto 3306.
  - oniriko-backend: Módulo para el backend, alojado en el puerto. Dispone de un Dockerfile que expone el puerto 8080.
  - oniriko-docker: Modulo con el docker-compose para orquestar la creación de imagenes y contenedores de los distintos módulos.
  - oniriko-frontend: Módulo frontal desarrollado con el framework react-ts. Dispone de un Dockerfile que buildea el frontal y lo levanta en un servidor con nginx en el puerto 80.
## Construcción y ejecución

Se requiere de un único comando para la construcción y ejecución de oniriko: `mvn clean install`. 

Esto comando creará un compose con 3 contenedores:
    - La base de datos 'oniriko-db' (expuesta en el puerto 3306).
    - El back-end, un proyecto de java spring-boot (expuesto en el puerto 8080).
    - El front-end, un proyecto hecho en react-ts (expuesto en el puerto 80).
    

### Páginas de referencia
  - [Ambu](https://ambu.coffee)
  - [East Crema Coffee](https://eastcrema.com/pages/suscripciones)
  - [CatLove](https://catlovecoffee.com)
