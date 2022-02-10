require('dotenv').config()
const {Schema,model} = require('mongoose')

const datosSchema = new Schema({
    titulo:String,
    precio:String,
    link:String,
    imagen:String,
    descripcion:String
},
{
    timestamps:{createdAt:false , updatedAt:true}
})

datosSchema.methods.setImagen = function setImagen(filename){
    //guardar URL completa
    this.imagen = `http://localhost:27017/public/${filename}`
}


const dbDatos = model('datosProductos', datosSchema)

module.exports = dbDatos