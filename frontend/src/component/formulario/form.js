import React, { useState } from 'react'
import axios from 'axios'
import './form.css'

export const Form = () => {
  const [form, setForm] = useState({
    titulo: '',
    precio: '',
    link: '',
    imagen: '',
    descripcion: '',
  })
  const [formImage, setFormImage] = useState()

  /*    CAPTURAR DATOS DE LOS INPUT */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleFile = (e) => {
    setFormImage(e.target.files[0])
  }

  /*     ENVIAR INFORMACION DE LOS INPUT A MONGODB */
  const handleSubmit = async (e) => {
    const dataForm = new FormData()
    dataForm.append('titulo', form.titulo)
    dataForm.append('precio', form.precio)
    dataForm.append('link', form.link)
    dataForm.append('imagen', formImage)
    dataForm.append('descripcion', form.descripcion)
    await axios.post('http://localhost:27017/cargarproducto', dataForm)
  }

  return (
    <div className="row container m-auto">
      <h2 className="text-center col-12 mt-5">Cargar Producto</h2>
      <div className="col-12 d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="form-container col-6"
          encType="multipart/form-data"
        >
          <label for="formControlInput" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control"
            id="formControlInput"
            placeholder="Titulo Producto"
            name="titulo"
            onChange={handleChange}
          />

          <label for="formControlInput" className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            id="formControlInput"
            placeholder="Precio"
            name="precio"
            onChange={handleChange}
          />

          <label for="formControlInput" className="form-label">
            Link
          </label>
          <input
            type="text"
            className="form-control"
            id="formControlInput"
            placeholder="Link Mercado libre"
            name="link"
            onChange={handleChange}
          />

          <label htmlFor="formFile" className="form-label">
            Cargar imagen
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="imagen"
            onChange={handleFile}
            accept="image/*"
          />
          {/* BOTON DE SUBIR IMAGEN*/}
          <div className="form-floating">
            <label htmlFor="floatingTextarea">Descripcion del producto</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="descripcion"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mt-3 text-center">
            <button type="submit" className="btn btn-success">
              Cargar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
