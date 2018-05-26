const Koa = require('koa');
const app = new Koa();
const port = 3000;
app.use(async (ctx) => {
    ctx.body = 'hellow'
})

app.listen(port)
console.log(`server is running at port ${port}`)