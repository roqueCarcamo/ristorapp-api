const PORT = process.env.PORT || 5000
const path = require('path')

const config = require('./server/config');
const app = require('./server');

app.use(app.static(path.join(__dirname, 'public')))
.get('/', (req, res) => res.render('api/index'))
.listen(PORT, () =>
  console.log(`Listening on ${ PORT }`))