const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.get('/path/to/file.pdf', function(req, res) {
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    res.sendFile('/path/to/resume.pdf');
  });

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('App listening on port ' + port);
});