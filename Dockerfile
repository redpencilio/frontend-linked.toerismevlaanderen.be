FROM madnificent/ember:4.12.1 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod


FROM semtech/static-file-service:0.2.0

ENV EMBER_ENABLE_SIGNATURES=""
ENV EMBER_ENABLE_IMPERSONATION=""

COPY ./proxy/compression.conf /config/compression.conf

COPY --from=builder /app/dist /data
