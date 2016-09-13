import {Dashboard} from 'bullet-tracer/lib/dashboard.js';

const app = new Dashboard({
  'basePagesUrl': 'http://localhost:8080/api/pages',
  'baseConfigUrl': 'http://localhost:8080/api/config',
  'baseUsersUrl': 'http://localhost:8080/api/users',
  'baseSetupUrl': 'http://localhost:8080/api/setup',
  'loginClientId': '83527002051-m5ht16pji08picn6qkd2jeq2t2oqbk8m.apps.googleusercontent.com'
});

app.render();
