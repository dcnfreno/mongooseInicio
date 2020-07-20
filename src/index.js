const express = require('express');
const morgan = require('morgan')

const app = express();

require('./database')

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'))

app.get('/', (req, res)=> {
  res.json({
    msg: 'hola mundo'
  })
})

app.listen(app.get('port'), ()=> {
  console.log(`Corriendo en el puerto ${app.get('port')}`);
})