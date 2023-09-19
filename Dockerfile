# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
RUN mkdir /opt/userscrud
RUN mkdir /opt/userscrud/be
WORKDIR /opt/userscrud/be

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port your application is running on
EXPOSE 8004

# Start your application
CMD ["node", "index.js"]  # Replace with your main Node.js file

