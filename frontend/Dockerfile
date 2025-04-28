# Build Stage
FROM node:18-slim as build
WORKDIR /app
COPY frontend/package.json .
COPY frontend/package-lock.json .  
RUN npm install
COPY frontend/ .

# Ensure the correct directory is used for the build
WORKDIR /app/src
RUN npm run build

# Serve Stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

