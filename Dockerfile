FROM node:23-alpine

# Actualizar las dependencias del sistema
RUN apk add --no-cache bash

# Usar usuario root para asegurar permisos
USER root

WORKDIR /app

# Actualizar npm a la última versión
RUN npm install -g npm@latest


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

