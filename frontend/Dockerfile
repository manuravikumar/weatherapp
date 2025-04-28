# Build Stage
FROM node:18 as build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Serve Stage
FROM nginx:alpine

# Copy the build output from the build stage to Nginx's default HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]


