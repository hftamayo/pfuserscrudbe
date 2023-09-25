FROM node:18

# Set the working directory in the container
RUN mkdir /opt/userscrud
RUN mkdir /opt/userscrud/be
WORKDIR /opt/userscrud/be

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8004

CMD ["node", "index.js"]

