import {Tracer} from 'bullet-tracer/lib/index';

const app = new Tracer({
  'basePagesUrl': 'http://localhost:8080/api/pages',
  'baseConfigUrl': 'http://localhost:8080/api/config'
});

app.render();
