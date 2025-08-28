# oniriko

## Requerimientos
  - Maven (Apache Maven 3.9.1)
  - Docker (Docker version 28.3.2)

## Módulos
  - oniriko-bd: Módulo para scripts de inicialización de la base de datos.
  - oniriko-backend: Módulo para el backend, alojado en el puerto. Dispone de un Dockerfile que expone el puerto 8080.
  - oniriko-docker: Modulo con el docker-compose para orquestar la creación de imagenes y contenedores de los distintos módulos.
## Construcción y ejecución

Se requiere de un único comando para la construcción y ejecución de oniriko: `mvn clean install -P docker`. 

Esto comando creará un compose con 2 contenedores:
    - La base de datos 'oniriko-db' (expuesta en el puerto 3306).
    - El backend, un proyecto de java spring-boot (expuesto en el puerto 8080).
    

### Páginas de referencia
  - [Ambu](https://ambu.coffee)
  - [East Crema Coffee](https://eastcrema.com/pages/suscripciones)
  - [CatLove](https://catlovecoffee.com)
