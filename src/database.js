const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/paginate-application', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log(db.connection.host))
  .catch(err => console.error(err));