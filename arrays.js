// inicializo boooleano que mantiene en funcionamiento el menu

console.log("inicalizar menu y array prefabricado");

let encendido = true;

let productos = [
  { nombre: "LAVARROPAS", precio: 599.99, stock: 10 },
  { nombre: "TELEVISOR", precio: 799.99, stock: 5 },
  { nombre: "LICUADORA", precio: 39.99, stock: 20 },
  { nombre: "MICROONDAS", precio: 129.99, stock: 8 },
  { nombre: "CAFETERA", precio: 49.99, stock: 15 },
];

// Creo la clase de producto

class Producto {
  //funcion contructor para producto
  constructor() {
    this.nombre = prompt("Ingrese el nombre del producto").toUpperCase();
    this.precio = parseFloat(prompt("Ingrese el precio del producto en $"));
    this.stock = parseInt(
      prompt(`Indique la cantidad de ${this.nombre} a ingresar`)
    );
  }
}
console.log(productos);
console.log("=======================================================");
console.log("elegir opcion");
while (encendido) {
  let opcion = parseInt(
    prompt(
      `
        Bienvenido al Sistema de Inventario de Electrodomesticos.
        La cantidad actual de productos almacenados en el sistema es de: ${productos.length} productos diferentes.

        ¿Que desea Hacer? Seleccione una opción por favor:

        1 - Agregar un producto
        2 - Mostrar todos los productos disponibles
        3 - Quitar un producto
        4 - Buscar un producto
        5 - Cambiar el stock de un producto
        6 - Cambiar el precio de un producto
        7 - Salir
        `
    )
  );

  // Agregar un producto al sistema
  switch (opcion) {
    case 1:

    console.log("=============== \n Selecciona Opcion 1\n Agrega nuevo producto:");
      productos.push(new Producto());

      let nombreProducto = productos[productos.length - 1].nombre;
      let precioProducto = productos[productos.length - 1].precio;
      let stockProducto = productos[productos.length - 1].stock;
      let idProducto = productos.length - 1;

      alert(`Se ha almacenado el siguiente producto: 
      Nombre: ${nombreProducto}
      precio: $ ${precioProducto}
      stock: ${stockProducto} Unidades
      Bajo el ID: ${idProducto}
      `);

      
      console.log(productos[productos.length - 1]);
      break;

    case 2:
      console.log("=============== \n Selecciona Opcion 2 \n Recorre toda la lista de productos y sus propiedades");
      for (let producto of productos) {
        let idProd = productos.indexOf(producto);
        alert(`
             ID: ${idProd}
             Nombre: ${producto.nombre}
             Precio: $ ${producto.precio}
             Stock: ${producto.stock} Unidades
            `);
      }

      break;

    // Eliminar un producto en particular basado en id
    case 3:

    console.log("=============== \n Selecciona Opcion 3\n Elimina un producto utilizando su ID");

      let terminar = false;
      let objetoEliminado =
        parseInt(prompt(`Indica el ID del producto que deseas eliminar 
            En caso de no conocerlo, puedes consultarlo en la opcion 2`));

            console.log("Se solicita ID y se comprueba que esté dentro del rango del array"); 

      if (objetoEliminado <= productos.length - 1) {
        alert(`Se eliminara de nuestro sistema el siguiente objeto:
              ID: ${objetoEliminado}
              Nombre ${productos[objetoEliminado].nombre}
              Precio: ${productos[objetoEliminado].precio}
              Cantidad en Stock ${productos[objetoEliminado].stock}`);

              console.log(`El objeto seleccionado para eliminar es ${productos[objetoEliminado].nombre} Se informan sus datos`);

        while (!terminar) {
          let confirmacion = parseInt(
            prompt(`Esta seguro de que desea eliminar el producto: ${productos[objetoEliminado].nombre}?
          1. SI
          2. NO`)
          );

          console.log("solicita confirmacion para eliminar el producto: ");

          switch (confirmacion) {
            case 1:
              console.log(`confirmado, se elimina ${productos[objetoEliminado].nombre}`);
              alert(
                `Se eliminó el producto: ${productos[objetoEliminado].nombre}`
              );
              productos.splice(objetoEliminado, 1);              
              terminar = true;
              break;
            case 2:
              alert("Revise nuevamente el ID del producto a eliminar");
              console.log("No confirmado, operación cancelada");
              terminar = true;
              break;
            default:
              alert("Opcion inválida");
              console.log("seleccionada opcion de confirmacion inválida");
              break;
          }
        }
      } else {
        alert(
          `El ID: "${objetoEliminado}" no pertenece a ningun producto. Verifique nuevamente el ID del producto que desea eliminar del sistema y vuelva a intentarlo.`
        );
        console.log("Seleccion invalida de ID para objeto a eliminar // El numero proporcionado no pertenece al rango de indices que contiene el array en su estado actual");
      }

      break;

    // Buscador por Nombre de Producto
    case 4:

    console.log("=============== \n Selecciona Opcion 4\n Buscar objeto por nombre \n ==========\n se hace uso del metodo FIND");

      let productoBuscado = prompt(
        "Ingrese el nombre del producto que desea enconcontrar"
      ).toUpperCase();

      console.log(`Se solicita nombre del producto. \n Valor ingresado: ${productoBuscado}`);

      let productoEncontrado = productos.find(
        (objeto) => objeto.nombre === productoBuscado
      );

      if (productoEncontrado) {
        let idProductoEncontrado = productos.indexOf(productoEncontrado);

        alert(`Objeto encontrado: 
        Nombre: ${productoEncontrado.nombre}
        Precio: ${productoEncontrado.precio}
        Stock: ${productoEncontrado.stock}
        id: ${idProductoEncontrado}
        `);

        console.log("Poducto encontrado y las propiedades del mismo se muestran");
        console.log(productos[idProductoEncontrado]);

      } else {
        alert(`El producto: ${productoBuscado}, no existe en nuestro sistema`);
        console.log("Producto no encontrado");
      }

      break;

    // cambiar stock de producto
    case 5:

      console.log("=============== \n Selecciona Opcion 5\n Cambiar el stock de un producto buscandolo por ID" );
      
      let modificarStock = prompt(
        "Indique el ID del Producto para modificar su Stock"
      );

      console.log("Se solicita ID y se comprueba que esté dentro del rango del array");

      if (modificarStock <= productos.length - 1) {
        let nuevoStock = parseInt(prompt(
          `El producto que se modificará es: ${productos[modificarStock].nombre}.
          Actualmente existen ${productos[modificarStock].stock} unidades en existencia. 
          Por favor indique el nuevo valor de stock de producto.`
        ));

        console.log(`Seleccionado el objeto:${productos[modificarStock].nombre} se solicita  el nuevo valor de stock y se comprueba que el mismo sea un numero y no sea nulo. `);

        if (isNaN(nuevoStock)&& nuevoStock !== null) {
          alert(`El valor ingresado debe ser un numero`);
          console.log("el valor ingresado o no es un numero o esta vacio, incorrecto.");
        } else {
          productos[modificarStock].stock = nuevoStock;
          alert(
            `El Stock ha sido modificado. El nuevo valor es ${productos[modificarStock].stock} unidades en existencia.`
          );
          console.log(`se modifican los valores de ${productos[modificarStock].nombre} al haber ingresado un nuevo valor válido`);
        }

      } else {
        alert(
          `El ID: "${modificarStock}" no pertenece a ningun producto. Verifique nuevamente el ID del producto que desea eliminar del sistema y vuelva a intentarlo.`
        );
        console.log("Seleccion invalida de ID para objeto a modificar // El numero proporcionado no pertenece al rango de indices que contiene el array en su estado actual");
      }

      break;

    // cambiar el precio
    case 6:

    console.log("=============== \n Selecciona Opcion 6\n Cambiar el precio de un producto buscandolo por ID" );
      let modificarPrecio = prompt(
        "Indique el ID del Producto para modificar su Precio"
      );

      console.log("Se solicita ID y se comprueba que esté dentro del rango del array");

      if (modificarPrecio <= productos.length - 1) {
        let nuevoPrecio = parseFloat(prompt(
          `El producto que se modificará es: ${productos[modificarPrecio].nombre}.
          El precio actual es $${productos[modificarPrecio].precio}. 
          Por favor indique el nuevo precio de producto.`
        ));

        console.log(`Seleccionado el objeto:${productos[modificarPrecio].nombre} se solicita  el nuevo precio y se comprueba que el mismo sea un numero y no sea nulo. `);

        if (isNaN(nuevoPrecio) && nuevoPrecio !== null) {
          alert(`El valor ingresado debe ser un numero`);
          console.log("el valor ingresado o no es un numero o esta vacio, incorrecto.");
        } else {
          productos[modificarPrecio].precio = nuevoPrecio;
          alert(
            `El precio del articulo ha sido modificado. El nuevo precio es de $${productos[modificarPrecio].precio}.`
          );
          console.log(`se modifican los valores de ${productos[modificarPrecio].nombre} al haber ingresado un nuevo valor válido`);
        }
        
      } else {
        alert(
          `El ID: "${modificarPrecio}" no pertenece a ningun producto. Verifique nuevamente el ID del producto que desea eliminar del sistema y vuelva a intentarlo.`
        );
        console.log("Seleccion invalida de ID para objeto a modificar // El numero proporcionado no pertenece al rango de indices que contiene el array en su estado actual");
      }
      break;
    case 7:

      alert("Gracias por utilizar el istema de Inventario de Electrodomesticos. Hasta Luego.");
      console.log("Finaliza el programa");
      encendido = false;
      break;
    default:
      alert("Ingrese una opción válida");
      console.log("Opción invalida seleccionada en el menú principal");
      break;
  }
}
