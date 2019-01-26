FROM php:fpm

RUN apt-get update && \
    apt-get install -y -qq git \
        libjpeg62-turbo-dev \
        libfreetype6-dev \
        libmcrypt-dev \
        libssl-dev \
        libgd-dev \
        libzip-dev \
        mc

RUN docker-php-ext-configure gd \ 
    --with-freetype-dir=/usr/include/ \ 
    --with-jpeg-dir=/usr/include/
RUN docker-php-ext-install -j$(nproc) zip gd bcmath pdo pdo_mysql

WORKDIR /code

