const Bullet = require('bullet-sabot');
const Sabot = Bullet.Sabot;
const Services = Bullet.Services;

const sabot = new Sabot(
  {
    repository: new Services.GoogleDatastore(require('./service_account_key.json').project_id, require('./service_account_key.json')),
    authentication: new Services.GoogleAuth(require('./client_secret.json').web),
  },
  {
    log: true,
    servePath: __dirname+'/public',
    staticMaxAge: 16384,
    dynamicMaxAge: 128
  }
);

sabot.listen(80);
