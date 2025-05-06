# 概要
docker、Nginx 環境の構築手順です。

|コンテナ|役割|URL|
|:-|:-|:-|
|Nginx|Webサーバー|http://localhost|

# 環境構築
1. BitBucketからリポジトリをクローン
1. Dockerコンテナを構築
    ```
    docker compose up -d
    ```

# dockerコンテナを落とす
```
docker compose down
```

# dockerを再度立ち上げる
```
docker compose up -d
```
