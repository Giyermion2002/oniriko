# Imagen base oficial de MySQL
FROM mysql:8.0

# Copiar todos los .sql al directorio de inicialización
# MySQL ejecuta automáticamente estos scripts en el primer arranque
COPY ./resources/tables /docker-entrypoint-initdb.d/

# Exponer el puerto 3306
EXPOSE 3306