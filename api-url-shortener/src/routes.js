const { Router } = require('express');


const routes = new Router();

const urlController = require('./app/controllers/url-controller');

routes.post('/', urlController.post);
routes.get('/:urlCode', urlController.get);

module.exports = routes;