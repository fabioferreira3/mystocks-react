FROM node:12

WORKDIR /usr/src/app/mystocks-react

COPY package*.json ./
COPY package.lock ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
