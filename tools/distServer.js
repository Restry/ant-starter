import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`http://localhost:${app.get('port')}`);
  }
});
