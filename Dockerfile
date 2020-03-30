# Pulls Node:10-Alpine image from DockerHub.
FROM node:10-alpine

# Set the Workdir as /app/order-app (this is the current dir from here).
WORKDIR /app/order-app

# Copy the package.json and yarn.lock files to the current Workdir.
COPY package.json yarn.lock ./

# Update yarn dependencies.
RUN yarn

# Copy files from the current dir to the filesystem of the container
COPY . .

# Port that is intended to be exposed.
EXPOSE 8080

# Set the NODE_ENV variable
# ENV NODE_ENV=dev

# Provide the "yarn dev" command as default when runs the container
# CMD ["yarn", "dev"]
