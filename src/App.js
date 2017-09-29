import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Search';
import WeatherList from './components/WeatherList'
import uuid from "uuid";


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    };

    receiveWeatherUpdate = (e) =>
    {
        var cityWeatherMap = this.state.data;
        cityWeatherMap.push({ "id":uuid.v4(), "cityName": e.city.name ,"data": e.list[0] });
        this.setState({data:cityWeatherMap});
        console.log(this.state.data);
    }

    removeCityFromWeatherList = (id) =>{
        console.log("parent = "+id);
        console.log(this.state.data);
        var items = this.state.data;
        for (var i = 0; i < items.length; i++)
            if (items[i].id === id) {
                items.splice(i, 1);
                break;
            }

        this.setState({data:items});
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To know about weather, type <b>city</b> and click search.
        </p>
          <div>
              <SearchBar getWeatherUpdate={this.receiveWeatherUpdate}/>
              <WeatherList  getWeatherUpdate={this.state.data} removeCityFromList={  this.removeCityFromWeatherList}/>
          </div>
      </div>
    );
  }
}

export default App;
