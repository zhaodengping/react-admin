## koa

安装

```
npm install koa
```

## koa-router

安装

```
npm install koa-router
```

`koa-router`的注册的请求，参数可以通过`ctx.params.name`去获取

`app.use(router.routes())`

## koa-bodyparser

安装

```
npm install koa-bodyparser
```

`koa-bodyparser`用于解析post请求解析body参数

`koa-bodyparser`必须是`router`之前被注册到`app`上

## koa-cors

安装

```
npm install koa-cors
```

主要解决跨域问题

```
const cors=require('koa-cors')

app.use(cors())
```