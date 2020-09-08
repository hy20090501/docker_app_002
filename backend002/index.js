const app = require('express')();
const http = require('http').createServer(app);

app.get('/backend002', (req, res) => {
  res.json({
    version: '2.0.0'
  })
});

http.listen(3002, () => {
  console.log('listening on *:3002');
});

