# Frontend Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source code
COPY frontend/ .

# Build the project (optional, can be used for production)
RUN npm run build

# Expose port for frontend
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
