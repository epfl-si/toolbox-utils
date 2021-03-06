# Toolbox Utils - CHANGELOG

*1.5.0* (2019-05-07)
  - ✨ add seemless offline support (6767f7a) 
  - ✨ add future proof reader CDN (see you in a year XD) (8721b4a) 
  - 💄 use nicer template log (16bbcb7) 
  - 🔨 drop gulp-utils for fancy-log #24 (5774132) 
  - 🔨 move vendors.min.css before projects CSSs for a safer future #32 (ff573d7) 
  - 🔨 replace deploy Gulp task by a stronger shell script #21 (2541b2d) 
  - ⬆️ update all dependencies (e0f09fc) 
  - 🔧 stop renaming keyframes, counter and gridTemplate (23dfe4c)

*1.4.5* (2018-07-19)
  - 🐛 fix broken components dirtree (b3ad176)

*1.4.4* (2018-07-19)
  - 🔨 simplify docs tree preparation (6b2b4ec)

*1.4.3* (2018-07-19)
  - ✨ add documentation custom structure (6e0ef93)

*1.4.2* (2018-06-19)

  - Fix styles bugs

*1.4.1* (2018-06-19)

  - 🔧 move gulp-uglify in normal dep (23e2167)

*1.4.0* (2018-06-15)

  - 🔧 add CustomEvent in js polyfills (c6881ca) 
  - Update polyfill for IE11 bug. (09e3aef) 
  - 💄 safer CSS (94a19e3) 
  - 🐛 fix prepare css/js inclusion (c7e3c2b) 
  - ⚡️ pre-construct components meta for quicker reader render (51690b3) 
  - ⚡️ resolve recuring perf issue (5304bb1) 
  - 📝 add comments (d851af4) 
  - ✨ dynamic components types (580fc0a) 
  - ⬆️ re-upgrade all depencies like a guedin (3954461) 
  - ✨ add update notification (ae8158e) 
  - ✨ multiple JS/SCSS possible using toolbox.json config (see doc) (227120e) 
  - ⬆️ Hard upgrade deps, upgrade to Webpack 4, remove fonticons and readd gulp-uglify for JS vendors (a01c6ba)

*1.3.1* (2018-02-06)
  - fix autoprefixer config to prefix CSS Grid layout

*1.3.1* (2017-12-13)
  - 🐛 fix reader js path (1432279)

*1.3.0* (2017-12-13)
  - ✨ simplify toolb-reader call (0493e13) 
  - ✨ copy also html doc file (c650137) 
  - ✨ add recursive homemade dir parser for docfiles (126f706) 
  - ✨ get doc file and pass it to template (91e1eb1)

*1.2.0* (2017-11-03)
  - 🐛 fix version injection (c8187ae) 
  - ✨ get package.json version and assign it to window (fd56a36) 
  - ✨ add IE polyfill (0ba0607) 
  - ✨ reader path option (b1c136e) 
  - ✨ pass theme config to window object (1e21fbb) 
  - 🐛 fix window JSON data print (47bbf69) 
  - 🔨 safer json file reading method (0afe9e0)

*1.0.8* (2017-07-28)
  - 🐛 fix refreshing data/color when save (f79cf7f)

*1.0.7* (2017-07-26)
  - 🐛 fix “Cannot find module 'prettier-webpack-plugin'” (0937cf2)

## 1.0.4 (2017-06-21)
- add `data.json` content to index.html
- remove scss from build
- don't copy SCSS files to build directory on build
