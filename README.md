
<h1 align="center" widht="50%">
  <img alt="NestJS" width="7%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
  <img alt="Nodejs" width="7%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img alt="TypeScript" width="7%" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" />
</h1>

<h1 align="center">Notifications Service API</h1>


## ⚡️ The Project
  This is a NestJS project created during the event IgniteLab from the company RocketSeat. This project is a Notification microservice created using Prisma.

  
## 🎯 Features
 - Notifications manipulation
 - SQLite integration
 - Prisma ORM
 - SOLID Concepts

## 🌐 Paths
 - Create a notification (POST)
 - List notifications from a recipient (GET)
 - Count notifications from a recipient (GET)
 - Read and unread notifications (PATCH) 


## ⚙️ Dependencies
 - [Yarn](https://yarnpkg.com/)

## 🚀️ Getting Started

1. Clone this repository: 

```bash
git clone https://github.com/avnerjose/nodejs-nestjs-notifications-service.git
```
2. Go to the folder you cloned the repository and install all dependencies

```bash
cd nodejs-nestjs-notifications-service && yarn
```

3. Migrate the database 
```bash
yarn prisma migrate dev
```

4. Run app
```bash 
yarn start:dev
```
4. Make requests to [localhost:3000]('http://localhost:3000') to use the api
   

## 🧪 Testing

```bash
yarn test
```
