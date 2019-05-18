const path = require('path');

module.exports = {
  dbUrl: 'mongodb+srv://alex:qwe@cluster0-l4izx.gcp.mongodb.net/twitter?retryWrites=true',
  cert: path.join( __dirname, '/etc/letsencrypt/live/www.dyma-projects.site/fullchain.pem'),
  key: path.join( __dirname, '/etc/letsencrypt/live/www.dyma-projects.site/privkey.pem'),
}