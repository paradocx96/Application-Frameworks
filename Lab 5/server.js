const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const HomeRoutes = require('./routes/home.router');
const PostRoutes = require('./routes/post.routes');

// Create Koa application
const app = new Koa();

// Middleware
// Registering the body parser
// content-Type = application/json
app.use(bodyParser());

// Middleware
// Registering routes with methods
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());

app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());

app.use(ctx => {
    ctx.body = 'Hello Server';
});

app.listen(3000);
console.log('Application is running on port 3000');

// http://localhost:3000/posts POST
// http://localhost:3000/posts GET
// http://localhost:3000/posts/{id} GET



