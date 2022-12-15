FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 80:3000
CMD bash -c "node index.js"