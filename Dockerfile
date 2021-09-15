
FROM node:12.18.1

WORKDIR /app

COPY ["package.json", "yarn.lock", "dschoon-react-waves-4.0.3.tgz", "./"]

RUN yarn install --production=false

COPY . .