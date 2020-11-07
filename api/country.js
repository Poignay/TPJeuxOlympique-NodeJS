

const axios = require('axios');

class CodeApha2Api {
    constructor() {
        this.url = 'https://restcountries.eu/rest/v2/';
    }
    async  getCodeApha2() {
        
        let response;
        try {
            response = await axios.get(this.url+"all");
        } catch (err) {
            if (!err.response) {
                console.error('Unknown error during the request');
                throw err;
            }
            const { data, status, statusText } = err.response;
            console.error('Error during the request', status, statusText, data);

            return [];
        }
        const results = response.data;
        let codes = [];
        for(let elem of results){
            codes.push({code: elem.alpha2Code, nom: elem.name})
        }
       return codes;
    };

    async  getName(code) {
        
        let response;
        try {
            response = await axios.get(this.url+"alpha/"+code);
        } catch (err) {
            if (!err.response) {
                console.error('Unknown error during the request');
                throw err;
            }
            const { data, status, statusText } = err.response;
            console.error('Error during the request', status, statusText, data);

            return [];
        }
        const results = response.data;
        return results.name;
    };
}
module.exports = CodeApha2Api;