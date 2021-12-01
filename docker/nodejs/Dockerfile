FROM node:16.13-alpine3.12

WORKDIR /usr/app

COPY ./src/package.json ./

RUN npm install 
RUN npx prisma generate ./prisma/schema.prisma
RUN npx prisma db push ./prisma/schema.prisma

COPY . . 

EXPOSE 3000

CMD npm start