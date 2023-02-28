const express = require('express');
const router = express.Router();

router.post('/', ()=>{
    console.log('Creando productos');
})

module.exports = router;