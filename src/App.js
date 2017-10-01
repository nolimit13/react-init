import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Search';
import WeatherList from './components/WeatherList'
import uuid from "uuid";
import MapWithAMarker from './components/map/Map';
import Places from './components/map/Places';
import GoogleMapLoader from './components/map/GoogleMapLoader';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [],
            center: {
                lat:31.5546,
                lng:74.3572
            }
        }
    };

    receiveWeatherUpdate = (e) =>
    {
        var cityWeatherMap = this.state.data;
        var items = this.state.data;
        var addItem = true;
        for(var i=0; i< items.length ;i++){
            if(items[i].cityName===e.city.name){
                addItem = false;
                break;
            }
        }
        if(addItem) {
            cityWeatherMap.push({
                "id": uuid.v4(),
                "cityName": e.city.name,
                "data": e.list[0],
                "lat": e.city.coord.lat,
                "lng": e.city.coord.lon
            });
            this.setState({data: cityWeatherMap, center:{ "lat": e.city.coord.lat, "lng": e.city.coord.lon}});
            console.log(this.state.center);
        }
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
              <WeatherList  getWeatherUpdate={this.state.data} removeCityFromList={this.removeCityFromWeatherList}/>
              {<MapWithAMarker
                  center={this.state.center}
                  markers={this.state.data}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
              />}
             {/* <GoogleMapLoader/>*/}
              <Places/>
          </div>
      </div>
    );
  }
}

export default App;
