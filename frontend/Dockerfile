# ------------------------------------------------------------------------------------------------------------------
# Etapa 1: Dependencias
# ------------------------------------------------------------------------------------------------------------------
FROM node:22-bullseye AS deps

WORKDIR /app

# Copiar manifest + lockfile (para mejor cacheo en builds multiplataforma)
COPY package.json yarn.lock ./

# Aumentar timeout de red y forzar uso de lockfile
RUN yarn config set network-timeout 600000 && yarn install --frozen-lockfile

# ------------------------------------------------------------------------------------------------------------------
# Etapa 2: Build
# ------------------------------------------------------------------------------------------------------------------
FROM node:22-bullseye AS builder

WORKDIR /app

# Copiar dependencias ya instaladas
COPY --from=deps /app/node_modules ./node_modules
# Copiar el resto del código
COPY . .

# Compilar el proyecto
RUN yarn build

# ------------------------------------------------------------------------------------------------------------------
# Etapa 3: Runner (Nginx)
# ------------------------------------------------------------------------------------------------------------------
FROM nginx:1.29.1-alpine AS runner

WORKDIR /app

# Borrar configuración por defecto de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar la configuración custom de nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

# Copiar el dist de la aplicación
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Comando por defecto para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
