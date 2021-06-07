FROM node:14

WORKDIR /usr/src/app/mystocks-react

COPY package*.json ./
COPY tailwind.config.js ./
COPY craco.config.js ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
