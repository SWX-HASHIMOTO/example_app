# Small size base image
FROM nginx:1.23.1-alpine
# Copy nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Create App Folder
RUN mkdir -p /app/build
# Copy build file
COPY build /app/build
EXPOSE 80
# Start nginx，daemon off because docker need run after start
CMD ["nginx", "-g", "daemon off;"]
