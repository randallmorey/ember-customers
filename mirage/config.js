import config from '../config/environment';
export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = config.api.host;    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = config.api.namespace;    // make this `/api`, for example, if your API is namespaced
  this.timing = 100;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/customers');
  this.post('/customers');
  this.patch('/customers/:id');
  this.del('/customers/:id');
}
