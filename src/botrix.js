const request = require('request');

class Botrix{

    constructor(){
        this.baseUrl = "https://botrix.cc/api/v1"
    }


    /**
     * Get's the user object
     * requires a userid
     * 
     * @userID users is
     */

    getUser(userID) {
        return new Promise((resolve, reject) => {
            request(`${this.baseUrl}/user/${userID}`, function (error, response, body) {
                if(error) reject(error);

                resolve(body);
            });
        });
    }


    getQueue() {
        return new Promise((resolve, reject) => {
            request(`${this.baseUrl}/queue`, function (error, response, body) {
                if(error) reject(error);

                resolve(body);
            });
        });
    }

    getBot(botID) {
        return new Promise((resolve, reject) => {
            request(`${this.baseUrl}/bot/${botID}`, function (error, response, body) {
                if(error) reject(error);

                resolve(body);
            });
        });
    }

    getVoted(botID) {
        return new Promise((resolve, reject) => {
            request(`${this.baseUrl}/bot/${botID}`, function (error, response, body) {
                if(error) reject(error);

                resolve(body);
            });
        });
    }
}


module.exports = Botrix;