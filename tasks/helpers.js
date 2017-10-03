const yargs = require('yargs');
const config = require('./config');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

function errorAlert(error) {
  if (!config.production) {
    $.notify.onError({ title: 'SCSS Error', message: 'Check your terminal', sound: 'Sosumi' })(error);
    $.util.log(error.messageFormatted ? error.messageFormatted : error.message);
  }
  this.emit('end');
}
module.exports.errorAlert = errorAlert;

function pathTo(relativePath) {
  return `${config.project}/${relativePath}`;
}
module.exports.pathTo = pathTo;

module.exports.projectPath = config.project;
