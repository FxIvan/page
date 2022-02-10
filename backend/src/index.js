require('dotenv').config()
const app = require('./app')
require('./db')

async function Main(){
    await app.listen(process.env.PORT || 3000)
    console.log(`Conectando por el Puerto: ${app.get('puerto')}`)
}

Main()