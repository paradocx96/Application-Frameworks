const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const PostRoutes = require('./routes/post.routes');
require('./dal');

// Create Koa application
const app = new Koa();

// Middleware
// Registering the body parser
// content-Type = application/json
app.use(bodyParser());

// Middleware
// Registering routes with methods
app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());

// Serve file in public folder
app.use(serve('public/'));

app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Application is running on port 3000');
});

// http://localhost:3000/posts POST
// http://localhost:3000/posts GET
// http://localhost:3000/posts/{id} GET
// http://localhost:3000/posts PUT
// http://localhost:3000/posts DELETE



