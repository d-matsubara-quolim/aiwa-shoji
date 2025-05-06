FROM nginx:1.22

RUN apt-get update \
    && apt-get install -y git curl

COPY ./conf.d /etc/nginx/conf.d
#COPY ./cert_local /usr/local/etc/cert_local

RUN mkdir -p /var/www
WORKDIR /var/www

#RUN rm -rf html
#RUN git clone https://github.com/hamee-dev/app-template-fuel.git && mv app-template-fuel/ html/

# WORKDIR /var/www/html


