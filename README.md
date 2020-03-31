# Simple Order App
Simple Order App API made with NodeJS.

# Sequelize

Instruction to install Sequelize Framework with yarn.

```
yarn add sequelize
```

Instruction to install NPX.

```
npm install npx
```

To run all migrations on container app.

```
sudo docker exec -it <container-nodejs> npx sequelize db:migrate
```

To undo all migrations on container app.

```
sudo docker exec -it <container-name|id> npx sequelize db:migrate:undo
```

To create a migration file.

```
sudo docker exec -it <container-name|id> npx sequelize --name <migration-name>
```

# Docker

Instruction to install docker.

```
wget -qO- https://get.docker.com/ | sh
```

Add current user to docker group (allow run docker without sudo command).

```
sudo user mod -aG docker $USER;
```

# Run Postgres Container

Build the image of Postgres container with the command below (the flag -t serves to define a title).
```
sudo docker build . -t order-app-postgres
```
Run the container with the following command. Use the -d flag to run in background and the -p to map the port.
```
sudo docker run -d -p 5432:5432 order-app-postgres
```

# Run NodeJS Container

Build the image of NodeJS container with the command below (the flag -t serves to define a title).
```
sudo docker build . -t order-app-nodejs
```
Run the container with the following command. Use the -d flag to run in background and the -p to map the port.

```
sudo docker run -d -p 8080:8080 order-app-nodejs
```
# Running with docker-compose

To build the images but not starting the containers, run the following command.

```
sudo docker-compose build
```

To run the containers in detached mode (-d flag) use the following command.

```
sudo docker-compose up -d
```

To run the containers but not building the images, run the following command.

```
sudo docker-compose up --no-build
```

To run docker-compose file with a different name (docker-compose-dev.yaml example).

```
sudo docker-compose -f docker-compose-dev.yaml up -d
```

To stop all services in docker-compose-dev.

```
sudo docker-compose -f docker-compose-dev.yaml down
```

To show logs about the containers.

```
sudo docker-compose -f docker-compose-dev.yaml logs -f
```

# Executing commands

Opening psql in postgres container.

```
sudo docker exec -it container-postgres psql -U postgres
```

Open the container's terminal with the following command.

```
sudo docker exec -it <container-name|id> /bin/bash
```

# Another Docker useful commands

Kill all containers.

```
sudo docker kill $(sudo docker ps -q)
```

Return low-level information on Docker objects

```
sudo docker inspect <options> <container-name|id>
```

Stop a container.

```
sudo docker stop <container-name|id>
```

Kill all containers.

```
sudo docker kill $(sudo docker ps -q)
```

