const Bullet = require('bullet-sabot');
const Sabot = Bullet.Sabot;
const Services = Bullet.Services;

const sabot = new Sabot(
  {
    repository   : new Services.MockRepo(),
    authentication: new Services.GoogleAuth(require('./client_secret.json').web),
  },
  {
    log: true,
    servePath: __dirname+'/public',
    dashboardPath: __dirname+'public/dashboard.html',
    indexPath: __dirname+'public/index.html',
    staticMaxAge: 16384,
    dynamicMaxAge: 128
  }
);

sabot.listen(80);
