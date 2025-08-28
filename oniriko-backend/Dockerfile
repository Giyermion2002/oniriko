FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copiar cualquier JAR que empiece por oniriko-backend y termine en .jar
COPY target/oniriko-backend*.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java","-jar","app.jar"]
