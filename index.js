const config = require('./server/config');
const app = require('./server');

app.listen(config.port, config.hostname, () => {
  console.log(`Server corriendo at http://${config.hostname}:${config.port}/`);
});