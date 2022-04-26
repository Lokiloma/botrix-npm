const request = require('request');

class Tumull{

    constructor(){
        this.baseUrl = "https://tumull.casino/api/v1"
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

                resolve(JSON.parse(body));
            });
        });
    }


    getQueue() {
        return new Promise((resolve, reject) => {
            request(`${this.baseUrl}/queue`, function (error, response, body) {
                if(error) reject(error);

                resolve(JSON.parse(body));
            });
        });
    }

    getBot(botID) {
        return new Promise((resolve, reject) => {
            request(`${this.baseUrl}/bot/${botID}`, function (error, response, body) {
                if(error) reject(error);

                resolve(JSON.parse(body));
            });
        });
    }

    getVoted(botID) {
        return new Promise((resolve, reject) => {
            request(`${this.baseUrl}/bot/${botID}`, function (error, response, body) {
                if(error) reject(error);

                resolve(JSON.parse(body));
            });
        });
    }
}


module.exports = Tumull;
