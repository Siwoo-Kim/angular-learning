const express = require('express');
const http = require('http');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3001';
app.set('port',port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));
const command = `json-server --watch src/META-INF/data.json --port ${port}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log('Error running exec', err);
    return;
  }
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
});
