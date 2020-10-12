/**
 * @author Trejocode - Sergio
 * @description Practicas para entendimiento de Callbacks
*/

// 01.- Sumar 2 números

console.log("Iniciando");

function sumar(num1, num2) {
    return Number(num1) + Number(num2);
}

function calcular(num1, num2, callback) {
    return callback(num1, num2);
}

console.info(calcular(5, 6, sumar));


// 02.- Fechas

function fechas(callback) {
    console.info(new Date);
    setTimeout(() => {
        const date = new Date();
        callback(date);
    }, 2000);
}

function imprimirFecha(dateNow) {
    console.info(dateNow);
}

fechas(imprimirFecha);


// 03.- Data fetching

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API_URL = "https://rickandmortyapi.com/api/character/";

function fetchData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(null, JSON.parse(xhr.responseText));
            } else {
                const error = new Error("Error: " + url);
                return callback(error, null);
            }
        }
    }
    xhr.send();
}

fetchData(API_URL, function(error1, response1) {
    if (error1) return console.error(error1);
    fetchData(API_URL + response1.results[0].id, function(error2, response2) {
        if (error2) return console.error(error2);
        console.info(response1.info);
        console.info(response2.name);
        console.info(API_URL);
        console.info(API_URL + response1.results[0].id);
    });
});