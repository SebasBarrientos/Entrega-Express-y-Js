const express = require("express")
const app = express()
const PORT = 3000
app.use(express.json())


const productos = [{ id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
{ id: 2, nombre: 'FIFA 23 PS5', precio: 1000 },
{ id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
{ id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
{ id: 5, nombre: 'Skin Valorant', precio: 120 },
{ id: 6, nombre: 'Taza de Star Wars', precio: 220 }]



app.listen(PORT, () => { //Levantar un servidor de Express
    console.log(`Servidor levantado en el puerto ${PORT}`);
})


app.get("/productos", (req, res) => {
    res.send(productos)
})

app.post("/productos", (req, res) => {
    (console.log(req.body))
    const productoNuevo = {
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    }
    productos.push(productoNuevo)
    res.send(productos)
})

//Crear endpoint para poder actualizar un producto
app.put("/productos/:id", (req, res) => {
    (console.log(req.body))
    productos.forEach(producto => {
        if (producto.id == req.params.id) {
            producto.nombre = req.body.nombre || producto.nombre
            producto.precio = req.body.precio || producto.precio
        }
    })
    res.send(productos)
})

app.delete("/productos/:id", (req, res) => {
    const productosFiltrados = productos.filter(producto =>producto.id != req.params.id)
    res.send(productosFiltrados)
})

app.get("/productos/:precio", (req, res) => {
    const productoFiltrados = productos.filter(producto =>producto.precio == req.params.precio)
    res.send(productoFiltrados)
})

//Crear filtro que muestre los productos con un precio entre 50 y 250.
app.get("/productosFiltrados", (req, res) => {
    const productosFiltrados = productos.filter(producto => (producto.precio > 50) && (producto.precio < 250))
    console.log(productosFiltrados);
    res.send(productosFiltrados)
})


app.get("/productoBuscadoPorId/:id", (req, res) => {
    const productoFiltrados = productos.filter(producto =>producto.id == req.params.id)
    res.send(productoFiltrados)
})
app.get("/productoBuscadoPorNombre/:nombre", (req, res) => {
    const productoFiltrados = productos.filter(producto =>producto.nombre == req.params.nombre)
    res.send(productoFiltrados)
})