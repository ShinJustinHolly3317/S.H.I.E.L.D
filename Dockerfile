FROM --platform=amd64 node:20-alpine
WORKDIR /app

COPY . .

ENV PORT=3000
ENV PM2_WORKER=1

RUN npm ci
RUN npm install pm2 -g

CMD ["sh", "-c", "pm2-runtime start ./src/index.js --node-args='-r dotenv-flow/config' -i ${PM2_WORKER}"]