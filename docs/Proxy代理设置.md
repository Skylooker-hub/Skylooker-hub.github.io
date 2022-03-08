---
sidebar_position: 3
---

# Proxy代理设置

## Git

* git config --global https.proxy <http://10.0.0.1:8080>

* git config --global http.proxy <http://10.0.0.1:8080>

* git config --global http.sslVerify false

> 取消代理

* git config --global --unset http.proxy

* git config --global --unset https.proxy

* git config --global --unset http.sslVerify

## NPM

* npm config set https-proxy <http://10.0.0.1:8080>

* npm config set proxy <http://10.0.0.1:8080>

* npm config set strict-ssl false

> 取消代理

* npm config delete https-proxy

* npm config delete proxy

* npm config delete strict-ssl
