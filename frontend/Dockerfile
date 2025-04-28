# Build Stage
# Build Stage
FROM node:18-slim as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .  
RUN npm install
COPY . .
RUN npm run build -- --src=frontend/src


# Serve Stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
