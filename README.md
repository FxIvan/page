<h1>Formulario de Carga de datos con Imagen</h1>
<p>Hola mi nombre es Ivan y soy desarrollador FrontEnd, aunque esta parte del proyecto es generalmente backend, lo que hice en esta parte fue lo siguiente:</p>
<p>FrontEnd: Formulario hecho con Bootstrap, libreria con axios para hacer el endpoint y capturar datos de los input</p>
<p>Backend: Utilize Express, Nodemon, Multer, Cors, y MONGODB por hay me olvido de alguna libreria que haya usado</p>
<h2>Aplicacion</h2>
<p><strong>1.</strong>Agregamos Datos al Formulario con una respectiva imagen</p>
<img src='https://github.com/FxIvan/page/blob/main/frontend/imgREADME/FormularioCarga.png?raw=true'/>
<p><strong>2.</strong>Al Enviar esta formulario a traves de axios mediante una peticion POST el backend lo recibe y esta se carga en la base de datos de mongo, que este ya se efectuo la conexion con anterioridad, obvio que la URL de mongo y el localhost del backend no debe estar visible en el codigo pero esto lo solucionare despues</p>
<p>Aqui podemos ver como se cargo los datos</p>
<img src='https://github.com/FxIvan/page/blob/main/frontend/imgREADME/BaseDeDatosMongoDB.png?raw=true'/>
<p><strong>3.</strong>Pero ahora, ¿Donde se carga la imagen?Lo que guarda mongo es la ruta nomas, la imagen ya esta incorporada dentra de nuestra carpeta backend, para eso hacemos click en la ruta de la imagen y
verificaremos que funciona correctamente la ruta y que la imagen este cargada correctamente</p>
<img src='https://github.com/FxIvan/page/blob/main/frontend/imgREADME/visualizandoRuta.png?raw=true'/>

