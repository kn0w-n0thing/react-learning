# Build the react app
FROM node:20 as builder

WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Serve the React app with Nginx
FROM nginx:alpine
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /var/www
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]