FROM nginx:alpine

COPY Index.html Style.css script.js US.jpeg S.jpeg we.jpeg /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
