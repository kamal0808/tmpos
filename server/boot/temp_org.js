'use strict';
var Promise = require('bluebird'); // jshint ignore:line

module.exports = function (app, cb) {
  Promise.resolve()
    .then(function () {
      console.log('Will find or create Poonam Creations');
      return app.models.Organisation.findOrCreate({
        name: 'Poonam Creations'
      });
    })
    .then(function (response) {
      console.log('Created poonam creations', response);
      return cb();
    })
    .catch(function (error) {
      console.log('error', error);
      return cb(error);
    });
};
