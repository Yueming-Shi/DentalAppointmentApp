FROM node:16.13.1-slim

RUN mkdir -p /services/backend

COPY . /services/backend

RUN chmod 777 /services/backend/start.sh

RUN cd /services/backend; npm install

WORKDIR /services/backend

EXPOSE 8000

CMD [ "npm", "start" ]

