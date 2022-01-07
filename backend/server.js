const http = require('http');
const app = require('./app');
const PORT = process.env.PORT;
app.set(4000);
const server = http.createServer(app);
server.listen(4000, () => {
  console.log(`App listening on port ${PORT || 4000}`);
});
