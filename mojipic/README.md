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

## Build

### frontend

```
node_modules/.bin/webpack --config conf/webpack.config.js
```
