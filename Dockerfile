FROM node:14.15.4
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm ci --production

COPY . .

CMD [ "npm", "run", "docker" ]
