## Dockerize development environment for MERN stack

### How to intall

- Install `DockerCE`
- Run command: `docker-compose up`

### MERN Stack

#### Server: Node.js

- Express server
- Nodemon watcher
- Morgan logger
- Sequelize ORM with MySQL driver

#### Webapp: React

- `create-react-app` v2
- React Router DOM
- Hot module reload

#### Database: MySQL 5.7

- Built in database server

### Docker

- docker-compose:

```
version: "3"
services:
  api:
    build:
      context: ./server
    links:
      - database:database
    expose:
      - 3000
    ports:
      - 3000:3000
    image: server-dev
    container_name: server-dev
    volumes:
      - ./server/src:/root/src/api/src
    tty: true
  web:
    build:
      context: ./webapp
    expose:
      - 3001
    ports:
      - 3001:3001
    image: web-dev
    container_name: web-dev
    volumes:
      - ./webapp/src:/root/src/app/src
      - ./webapp/public:/root/src/app/public
    tty: true
  database:
    image: mysql:5.7
    container_name: db-dev
    restart: always
    environment:
      MYSQL_DATABASE: "example_dbname"
      MYSQL_USER: "username"
      MYSQL_PASSWORD: "password"
      MYSQL_ROOT_PASSWORD: "password"
    expose:
      - 3306
    ports:
      - 3306:3306
    volumes:
      - ./mysql:/var/lib/mysql
```
