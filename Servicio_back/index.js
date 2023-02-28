// console.log('texto prueba')

// CREACION DEL SERVIDOR

const express = require('express');
const conectarBD = require('./config/db');


const app = express();

conectarBD();

  app.get('/',(req,res)=>{
      res.send('Hola mundo')
  })

//  app.use('/api', require('./routes/Producto'));

app.listen(4000,()=>{
console.log('El servidor esta en ejecucion ')


})
