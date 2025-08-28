# ------------------------------------------------------------------------------------------------------------------
    
FROM node:22-alpine3.21 as deps

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# ------------------------------------------------------------------------------------------------------------------

FROM node:22-alpine3.21 as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# ------------------------------------------------------------------------------------------------------------------

FROM nginx:1.29.1-alpine as runner

WORKDIR /app

# Borrar configuración por defecto de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar la configuración custom de nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

# Copiar el dist de la aplicación
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Comando por defecto para ejecutar nignx
CMD ["nginx", "-g", "daemon off;"]
