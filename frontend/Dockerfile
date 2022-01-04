FROM node:16.13.1-slim

RUN mkdir -p /services/frontend
WORKDIR /services/frontend

COPY build ./build
COPY start.sh ./start.sh
COPY index.js ./index.js
COPY package.prod ./package.json

RUN chmod 777 start.sh

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]

