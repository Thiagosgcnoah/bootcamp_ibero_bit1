const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config({path:"config.env"});

const conectarBD = async()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO,    {
            useNameUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('BD Conectado');
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports =  conectarBD