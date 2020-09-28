const express = require('express');
const app = express();

//Serve our static files:

app.use(express.static('./dist/ang-todo/'));

//Wait for a request to any path and redirect all of the requests to index.html:

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: './dist/ang-todo/'});
});

//Listen for requests at the PORT specified by env variables or the default Heroku port, which is 8080:

app.listen(process.env.PORT || 8080);