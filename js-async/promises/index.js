/**
 * @author Trejocode - Sergio
 * @description Practicas para entendimiento de Promises
*/

console.log("Iniciando");

// 01.- Impresión de un mensaje

const status = true;

const algoPasara = _ => {
    return new Promise((resolve, reject) => {
        if (status) {
            resolve("Todo bien");
        } else {
            reject("Algó malo sucedió");
        }
    });
};

algoPasara()
.then(response => console.info(response))
.catch(error => console.error(error));


const algoMaloSucedera = _ => {
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
};

algoMaloSucedera()
.then(response => console.info(response))
.catch(error => console.error(error));


Promise.all([algoPasara(), algoPasara()])
    .then(response => console.info("Resultados: ", response))
    .catch(error => console.error(error));


// 02.- Data fetching

const fetchData = require("./fetch");
const API_URL = "https://rickandmortyapi.com/api/character/";

fetchData(API_URL)
    .then(response => {
        console.info(response.info);
        return fetchData(`${API_URL}${response.results[0].id}`)
        .then(response => {
            console.info(response.name);
        })
    }).catch(error => console.error(error));