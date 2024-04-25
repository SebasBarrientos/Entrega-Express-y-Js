const express = require ("express")
const app = express()
const PORT = 3000
app.use(express.json())


app.listen (PORT, ()=>{ //Levantar un servidor de Express
    console.log(`Servidor levantado en el puerto ${PORT}`);
} )
//Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get (`/`, (req,res)=>{
    res.send ("Hola querido, entraste al server")
})
//Ruta: Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos
app.get ("/productos", (req,res)=>{
    res.send ("listado de productos")
})
//Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post ("/productos", (req,res)=>{
     (console.log(req.body))
    res.send ("crear un producto")
})
//Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put ("/productos/:id", (req,res)=>{

    console.log(req.params.id);
    console.log(req.body);
    res.send("actualizar un producto")
})
//Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.delete ("/productos/:id", (req,res)=>{
     (console.log(req.params.id))
    res.send ("borrar un producto")
})

//Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get ("/usuarios", (req,res)=>{
    res.send("listado de usuarios")
})

//Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post ("/usuarios", (req,res)=>{
    console.log(req.params.id);
    res.send ("crear un usuario")
})

//Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put ("/usuarios/:id", (req,res)=>{

    console.log(req.params.id);
    console.log(req.body);
    res.send("actualizar un usuario")
})
//Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario

app.delete("/usuarios/:id",(req,res)=>{
    (console.log(req.params.id))
    res.send ("borrar un producto con el id "+ req.params.id)
})