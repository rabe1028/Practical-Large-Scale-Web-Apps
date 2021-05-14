# mojipic

Tutorial App for large scale Web-app course by N yobikou

## Setup

### install node.js

use [nodebrew](https://github.com/hokaccha/nodebrew)

```shell
$ curl -L git.io/nodebrew | perl - setup
$ nodebrew install v10.14.2
$ nodebrew use v10.14.2
# check node version
$ node -v
```

### install mysql

use docker

```shell
# save to {HOME}/workspace/mojipic-mysql
docker run --name mojipic-mysql -v ~/workspace/mojipic-mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=mysql -d -p 3306:3306 mysql:5.7.19 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

# If you want to access mysql, use below command
docker exec -it mojipic-mysql mysql -u root -pmysql
```

### install redis

use docker

```sh
docker run --name mojipic-redis -d -p 6379:6379 redis:4.0.1

# If you want to access redis, use below command
docker exec -it mojipic-redis redis-cli -h localhost -p 6379
```

### install ImageMagick

#### Mac

```sh
brew install imagemagick
```

#### Windows

```sh
choco install imagemagick --version 7.0.6.10

# We want to use convert.exe, but this file is removed in Windows version.
# So, Create Symbolic Link
cd C:¥Program Files¥ImageMagick-7.0.6-Q16
mklink convert.exe magick.exe
```

## Build

### frontend

```
node_modules/.bin/webpack --config conf/webpack.config.js
```

## Run

```sh
docker start mojipic-mysql
docker start mojipic-redis
```