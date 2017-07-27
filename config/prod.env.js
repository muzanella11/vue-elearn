var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

var env = require('dotenv').config({
  path: path.join(projectRoot, '.env')
});

module.exports = {
  NODE_ENV: '"production"',
  BASE_URL: '"'+process.env.BASE_URL+'"',
  VERSION: '"'+process.env.VERSION+'"',
  APP_KEY: '"'+process.env.APP_KEY+'"'
}
