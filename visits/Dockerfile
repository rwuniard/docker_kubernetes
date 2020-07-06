# Get the base iamge
FROM node:alpine

# Set the working directory
WORKDIR /usr/app

# Copy the package.json
COPY ./package.json ./

# Install the dependencies
RUN npm install

# Copy the source directory
COPY ./src ./src

# Run the app
CMD ["npm", "start"]