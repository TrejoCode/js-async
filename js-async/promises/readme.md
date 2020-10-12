# ¿Qué son las Promesas?

**De forma sencilla:** 
Una promesa es un objeto que representa un valor que puede que esté disponible «ahora», en un «futuro» o que «nunca» lo esté.

**De forma más compleja:** 
Una promesa es un objeto que envuelve una operación asíncrona y queda pendiente de su estado. Cuando realizamos operaciones asíncronas con promesas, la función que usemos devolverá una promesa.

### 3 Estados de la promesa:

**Pending** => Significa que una promesa no ha empezado o que esta en progreso.
**Fullfilled** => Significa que la operación se ha completado.
**Rejected** => Significa que la operación no se ha completado.

![Promesa](https://mdn.mozillademos.org/files/8633/promises.png)

### Ejemplo 1: Impresión de un mensaje

```js
// Variable de estado de control (Muestra)
const status = true;

// 2.- Ejecución de la función 'algoSucedera', regresando una instancia del objeto Promise
// - Recibe 2 argumentos 'resolve', 'reject' (Resolver, Rechazar)
const algoSucedera = _ => {
    return new Promise((resolve, reject) => {
        if (status) {
            setTimeout(() => {
                resolve("Todo bien, nada mal");
            }, 2000);
        } else {
            const error = new Error("Algo inesperado sucedió")
            reject(error);
        }
    });
}

// 1.- Invocación de la función
algoSucedera()
.then(response => console.info(response))
.catch(error => console.error(error));
```