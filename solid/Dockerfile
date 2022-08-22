FROM node:lts-alpine
WORKDIR /solid
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY  . .
EXPOSE 3000
EXPOSE 31000
CMD ["npm", "run", "dev", "--host"] 
