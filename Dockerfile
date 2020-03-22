FROM node:10.6.0
COPY . /app/order-app
WORKDIR /app/order-app
RUN npm install
RUN npm start