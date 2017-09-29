import React, { Component } from 'react';
import fetchWeather from './FetchWeather';
import axios from 'axios';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            cityName: 'Lahore'
        };
    };

    getWeather = (e) => {
        e.preventDefault();
        let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.cityName}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`;
        axios.get(url)
            .then((response)=> {
                this.props.getWeatherUpdate(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount()
    {
        let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.cityName}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`;
        axios.get(url)
            .then((response)=> {
                this.props.getWeatherUpdate(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateName = (e) =>
    {
        this.setState({cityName: e.target.value});
    }

    render(){
        return (
            <div className="App">
            <form onSubmit={this.getWeather}>
                <input placeholder="Search..." onChange={this.updateName} type="text"/><input type="submit" value="Search"/>
            </form>
        </div>
        )
    }

}

export default SearchBar;