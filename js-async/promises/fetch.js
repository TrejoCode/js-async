/**
 * @author Trejocode - Sergio
 * @description Función de Data Fetching
*/

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = _ => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    const error = new Error("Error: " + url);
                    reject(error);
                }
            }
        }
        xhr.send();
    });
};

module.exports = fetchData;