FROM mysql:latest

ENV MYSQL_AUTHENTICATION_PLUGIN=mysql_native_password
ENV MYSQL_ROOT_PASSWORD=root
ENV ALLOW_EMPTY_PASSWORD=NO
ENV MYSQL_USER=newuser
ENV MYSQL_PASSWORD=password
ENV MYSQL_DATABASE=banco_dados

COPY ./db_data_node /docker-entrypoint-initdb.d/

EXPOSE 3306