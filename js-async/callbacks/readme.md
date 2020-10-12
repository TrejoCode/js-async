# ¿Qué son las Callbacks?

**De forma sencilla:** 
Un Callback (llamada de vuelta) es una función que se ejecutará después de que otra función haya terminado de ejecutarse, de aquí el nombre de Callback.

**De forma más compleja:** 
En JavaScript, las funciones son objetos. Por ello, las función admiten funciones como argumentos y pueden ser devueltas por otras funciones. Las funciones que hacen esto se denominan funciones de orden alto (high-order). Cualquier función que se pase como argumento se denomina función Callback.

### Ejemplo 1: Suma de 2 números

```js
// 3.- Ejecuto la función 'callback' y regreso la suma
function sumar(num1, num2) {
    return Number(num1) + Number(num2);
}

// 2.- Recibo 2 argumentos y ejecuto la función 'sumar(num1,num2)', lo retorno
function calcular(num1, num2, callback) {
    return callback(num1, num2);
}

// 1.- Llama a consultar, pasando 2 argumentos y la función 'sumar'
console.info(calcular(5, 6, sumar));
// 4.- Imprimo el resultado de la función 'sumar'
```

### Ejemplo 2: Impresión de 2 fechas

```js
// 2.- Ejecución de la función, recibiendo como argumento la función 'imprirFechas'
// - Imprime 'new Date', espera 2 segundos y ejecuta la función 'imprimirFechas'
function fechas(callback) {
    console.info(new Date);
    setTimeout(() => {
        const date = new Date();
        callback(date);
    }, 2000);
}

// 3.- Recibe como argumento 'new Date' e imprime la fecha
function imprimirFecha(dateNow) {
    console.info(dateNow);
}

// 1.- Llama la función 'fechas', pasando como argumento la función 'imprimirFecha'
fechas(imprimirFecha);
```