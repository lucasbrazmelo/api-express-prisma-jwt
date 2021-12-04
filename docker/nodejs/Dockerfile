FROM node:16.13-alpine3.12

WORKDIR /usr/app

COPY ./src ./

RUN npm install
RUN sleep 60
RUN npx prisma generate --schema=./prisma/schema.prisma

EXPOSE 3000
EXPOSE 5555

CMD npm start