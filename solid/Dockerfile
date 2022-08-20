FROM node:lts-alpine
WORKDIR /solid
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY  . .
EXPOSE 21000
CMD ["npm", "run", "dev", "--host"] 
