import React, { Component } from 'react';
import '../App.css';
class WeatherList extends Component
{
    constructor(props) {
        super(props);
    };

    deleteCity (id){
        console.log(id);
        this.props.removeCityFromList(id);
    }

    render() {
        return (
            <div className="row">
                {this.props.getWeatherUpdate.map(data =>
                    <div className="col-12">
                        <div key={data.id} >
                            <p><span>City Name: </span>{data.cityName} <input type="button" value="X" onClick = { () => {
                                this.deleteCity(data.id)}  } /></p>
                            <p><span>Temp: </span>{data.data.temp.max}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default WeatherList;