const Koa = require('koa');
const app = new Koa();

const dotenv = require('dotenv');
const config = require('./config/default');

app.keys = [config.secret];
dotenv.config();

const path = require('path');
const fs = require('fs');

// Здесь подключаються модули из папки handlers.
const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => require('./handlers/' + handler).init(app));



const Router = require('@koa/router');
const router = new Router();

const routeHome = require('./routes/home');
const routeUser = require('./routes/user');
const routeContact = require('./routes/contact');
const routeMenu = require('./routes/menu');
const routeCategorie = require('./routes/categorie');
const routeArticle = require('./routes/article');

router.get('/', routeHome);
router.get('/user', routeUser);
router.post('/contact', routeContact.post);
router.post('/menu', routeMenu.post);
router.post('/categorie', routeCategorie.post);
router.post('/article', routeArticle.post);
router.get('/article/:id', routeArticle.getByID);

router.get('/api/contact/all', routeContact.getAll);
router.get('/api/menu/all', routeMenu.getAll);
  


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(config.port);
