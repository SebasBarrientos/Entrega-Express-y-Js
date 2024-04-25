const productos = document.getElementById("productos");
const btnAgregar = document.getElementById("btnAgregar");
const btnAEliminar = document.getElementById("btnAEliminar");
const objetonuevo = {
    nombre: 'Nuevo Objeto', precio: 2000
}

 const getPosts = async ()=> {
    try {
        const res = await axios.get("http://localhost:3000/productos");
        listadoProductos= res.data;
        productos.innerHTML = ""
        listadoProductos.forEach(producto => {
            const button = document.createElement("button");
            button.innerText = "Delete" 
            button.id = producto.id;
            button.addEventListener("click", () => eliminarProducto(button.id))
            productos.innerHTML += `<li>Nombre:${producto.nombre} Precio:${producto.precio} </li>`
            productos.appendChild(button);
        })
    } catch (error) {
        console.error(error);
    }
}

getPosts()

const updateList = async ()=> {
    try {
        const res = await axios.post("http://localhost:3000/productos",objetonuevo);
        console.log(res)
        getPosts()
    } catch (error) {
        console.error(error);
    }
}
const eliminarProducto = async (id)=> {
    try {
        const res = await axios.delete(`http://localhost:3000/productos/${id}`);
        console.log(res)
        const resget = await axios.get("http://localhost:3000/productos");
        listadoProductos= resget.data;
        productos.innerHTML = ""
        listadoProductos.forEach(producto => {
            if (id!=producto.id) {
                const button = document.createElement("button");
                button.innerText = "Delete" 
                button.id = producto.id;
                button.addEventListener("click", () => eliminarProducto(button.id))
                productos.innerHTML += `<li>Nombre:${producto.nombre} Precio:${producto.precio} </li>`
                productos.appendChild(button);
                            }
        })
    } catch (error) {
        console.error(error);
    }
}

btnAgregar.addEventListener("click", updateList)
// btnAEliminar.addEventListener("click", eliminarProducto)
// axios.get("localhost:3000/productos")
    
//  .then((res) => console.log(res))
      
//  .catch((err) => console.error(err));

