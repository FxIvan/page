const {Router} = require('express')
const router = Router()
const datosProductos = require('../models/models')
const upload = require('../libs/storage')

router.route('/')
.get(async(req,res)=>{
    const pedido = await datosProductos.find()
    res.json(pedido)
})
.post(upload.single('imagen'),async(req,res)=>{

    const {titulo,precio,link,imagen,descripcion} = req.body
    const newProducts = new datosProductos({
        titulo,
        precio,
        link,
        descripcion
    })

    /* ASIGNANDO NOMBRE A LA RUTA DE LA IMAGEN*/
    if(req.file){     
        const {filename} = req.file
        newProducts.setImagen(filename)
    }

    await newProducts.save()
})

module.exports = router