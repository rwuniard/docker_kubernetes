# Specify base image
FROM node:alpine

# Set the working directory
WORKDIR /usr/app

# Copy just the package.json so we don't keep rebuilding the npm install
COPY ./package.json ./
# Install some dependencies
RUN npm install
# Copy the files
COPY ./src ./src

# Run the application
CMD ["npm", "start"]
