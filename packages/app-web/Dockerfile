FROM nginx:1.23.4-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY www /usr/share/nginx/html
ARG APP_VERSION
ARG APP_GIT_HASH
ENV APP_VERSION=$APP_VERSION \
    APP_GIT_HASH=$APP_GIT_HASH
