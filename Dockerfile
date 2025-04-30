FROM node:22-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]