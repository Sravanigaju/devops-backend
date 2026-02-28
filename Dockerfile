# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Define environment variables (can be overridden at runtime)
ENV MONGO_URI=mongodb://mongo:27017/devops-backend
ENV PORT=5000

# Command to run your application
CMD ["npm", "run", "dev"]
