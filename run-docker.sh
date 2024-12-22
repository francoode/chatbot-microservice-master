#!/bin/bash


# Baja los contenedores
echo "Deteniendo y eliminando contenedores..."
docker-compose down

# Levanta los contenedores en segundo plano con build
echo "Reconstruyendo y levantando contenedores..."
docker-compose up --build -d

# Escucha los logs en tiempo real
echo "Mostrando logs en tiempo real..."
docker-compose logs -f