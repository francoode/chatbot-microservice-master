#!/bin/bash

echo "Deteniendo todos los contenedores..."
docker stop $(docker ps -aq)

echo "Eliminando todos los contenedores..."
docker rm $(docker ps -aq)

echo "Eliminando todas las imágenes..."
docker rmi -f $(docker images -q)

echo "Eliminando todas las redes no usadas..."
docker network prune -f

echo "Eliminando todos los volúmenes no usados..."
docker volume prune -f

echo "Limpiando Docker completado."
