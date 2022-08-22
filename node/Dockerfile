FROM node:lts-alpine
WORKDIR /node
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY  . .
EXPOSE 3001
EXPOSE 32000
CMD ["npm", "run", "dev"]