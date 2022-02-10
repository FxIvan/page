const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.set('puerto', process.env.PORT || 3000)
app.use('/public', express.static(`${__dirname}/storage/imgs`)) // __dirname es apartir de esta direcion(en este caso app) me dirijo a la ruta /storage/imfs

app.get('/',(req,res)=>{
    res.send('Conexion correctamente')
})

app.use('/cargarproducto', require('./routes/cargarproducto'))

module.exports = app