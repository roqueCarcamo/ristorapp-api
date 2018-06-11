const PORT = process.env.PORT || 5000

const config = require('./server/config');
const app = require('./server');

app.listen(PORT, () =>
  console.log(`Listening on ${ PORT }`))