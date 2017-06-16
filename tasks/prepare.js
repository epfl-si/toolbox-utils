const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config');
const fs = require('fs');
const fetch = require('node-fetch');
const yargs = require('yargs');

const rawgit = 'https://rawgit.com/frontend/toolbox-reader/master/build';
const dirs = ['atoms', 'molecules', 'organisms', 'pages'];
const components = [];

const prepare = async (done) => {

  const toolboxConfig = await fetch(`${rawgit}/asset-manifest.json`)
    .then(function(res) {
      return res.json();
    }); 

  dirs.forEach((dir) => {
    let files = fs.readdirSync(`${config.project}/${config.src}components/${dir}`);
    
    // ignore .gitkeep
    const gitKeepIndex = files.indexOf('.gitkeep');
    if (gitKeepIndex > -1) {
      files = [...files.slice(0, gitKeepIndex), ...files.slice(gitKeepIndex + 1)];
    }

    files.forEach(file => components.push(`./components/${dir}/${file}`));
  });
  
  return gulp.src('./templates/index.html')
    .pipe($.replace('/* SOURCES */', `"${components.join('","')}"`))
    .pipe($.cheerio(($, file) => {
      $(`  <link rel="stylesheet" href="${rawgit}/${toolboxConfig['main.css']}">\n`).appendTo('head');

      if (!yargs.argv.dev || yargs.argv.styleguide) {
        $(`  <script src="../js/vendors.bundle.js"></script>\n`).appendTo('body');
        $(`  <script src="../js/app.bundle.js"></script>\n`).appendTo('body');
      }
      $(`  <script src="${rawgit}/${toolboxConfig['main.js']}"></script>\n`).appendTo('body');
    }))
    .pipe(gulp.dest(config.dest, {cwd: config.project}));
}

module.exports = prepare;