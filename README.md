# Indice:

- [Tienda Vinos](#Back-Tienda-Vinos)
- [Instrucciones](#instrucciones)
- [Endpoints](#endpoints)
    - [Auth](#auth)
    - [Canales](#canales)
    - [Message](#message)
- [Capturas](#capturas)
  - [Autor](#autor)
      - [Ibrahim Alzuru :venezuela:](#Ibrahim-Alzuru)



# Tienda Vinos

En este proyecto se emulan las propiedades de un e-commerce tradicional, donde podras ver todos los vinos de nuestra bodega, podras buscarlos por nombre o por su Id, adjuntarlos al carrito y finalizar la compra.



# Instrucciones

Para poder lanzar peticiones necesitamos utilizar Postman (https://www.postman.com) y apuntar a este servidor de heroku: https://.herokuapp.com


# Endpoints

A continuación se especifican el método a introducir en Postman, y lo que debemos introducir a continuación de la raiz para acceder a cada uno de los endpoints.

### Auth

POST / register --> Puedes registrar un usuario

POST / login --> Puedes loguear el usuario

GET / profile  --> Puedes ver el perfil del usuario

PUT / profile/config/id --> Puedes modificar el perfil 

GET / logout --> Puedes hacer el logout del usuario

### Producto (admin)

POST/product/create --> Puedes crear  productos

POST/ product/edit/{id} --> Puedes editar un producto

DELETE /product/delete/{id} --> Puedes borrar un producto por su id

GET /product/get/{id} --> Puedes buscar un producto por su id

GET /product/get --> Puedes ver todos los productos


### Pedidos (admin)

PUT / pedido/update/{pedidoId}  --> Puedes cambiar el estado de un pedido por su id

GET / pedido/get/all/{estado} --> Puedes ver el estatus de todos los pedidos

GET / pedido/get/order/byDate  --> Puedes ver todos los pedidos por fecha descendente


# Capturas

![](img/1.png)
![](img/2.png)

## Autor

#### [Ibrahim Alzuru](https://github.com/ibralzuru) :venezuela:

---------------------

[:top:](#indice)
