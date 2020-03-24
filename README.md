# Simple Order App
Simple Order App API made with NodeJS.

# Docker

Instruction to install docker.

```
wget -qO- https://get.docker.com/ | sh
```

Add current user to docker group (allow run docker without sudo command).

```
sudo user mod -aG docker $USER;
```
# Run NodeJS Container

Build the image of NodeJS container with the command below (the flag -t serves to define a title).
```
sudo docker build . -t order-app
```

Run the container with the following command. Use the -d flag to run in background and the -p to map the port.

```
sudo docker run -d -p 8000:8080 order-app
```


