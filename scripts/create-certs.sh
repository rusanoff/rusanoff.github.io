#!/bin/bash

if ! command -v mkcert >/dev/null 2>&1; then
  echo "Ошибка: mkcert не установлен."
  echo "Пожалуйста, установите mkcert, следуя инструкциям: https://github.com/FiloSottile/mkcert"
  exit 1
fi

rm -rf certs && \
mkdir -p certs && \
mkcert -key-file ./certs/localhost-key.pem -cert-file ./certs/localhost-cert.pem localhost 127.0.0.1 ::1 && \
chmod -R 777 ./certs

if [ $? -eq 0 ]; then
  echo "Сертификаты успешно созданы."
else
  echo "По время создания сертификатов произошла ошибка."
fi
