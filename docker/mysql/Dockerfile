FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD="root"
ENV MYSQL_DATABASE="banco_dados"

COPY db_data_node /docker-entrypoint-initdb.d/init.sql

EXPOSE 3306