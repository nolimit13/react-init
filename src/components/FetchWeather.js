import axios from 'axios';

/*
let fetchWeather = function(city)
{
    axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a')
        .then(function (response) {
            return new Promise(resolve => {
                // This is an example of an http request, for example to fetch
                // user data from an API.
                // This module is being mocked in __mocks__/request.js
                http.get({path: url}, response => {
                    let data = '';
                    response.on('data', _data => data += _data);
                    response.on('end', () => resolve(data));
                })
        })
        .catch(function (error) {
            console.log(error);
        });
};

export default fetchWeather;

*/


    export default function fetchWeather(city) {
        let url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a";
        return new Promise(resolve => {
            // This is an example of an http request, for example to fetch
            // user data from an API.
            // This module is being mocked in __mocks__/request.js
            axios.get({path: url}, response => {
                let data = '';
                response.on('data', _data => data += _data);
                response.on('end', () => resolve(data));
            });
        });
    }



