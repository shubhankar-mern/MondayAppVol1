import React from 'react';
import './App.css';
import mondaySdk from 'monday-sdk-js';
import 'monday-ui-react-core/dist/main.css';
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from 'monday-ui-react-core/dist/AttentionBox.js';
import { Link } from 'react-router-dom';
import Table from './Components/Table';
import WeatherTable from './Components/WeatherTable';
import Mapbox from './Components/Mapbox';
import Mapbox2 from './Components/Mapbox2';
//require('dotenv').config();
import logo from './Components/logo.png';
const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      lat: 0,
      lon: 0,
      pollutionData: {},
      weatherData: {},
      PollutionDataAsked: false,
      WeatherDataAsked: false,
      MapAskedPollution: false,
      MapAskedWeather: false,
    };
  }

  componentDidMount() {}
  componentDidUpdate() {
    console.log('lat:', this.state.lat);
    console.log('lon:', this.state.lon);
  }
  handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      this.setState({ lat: lat });
      this.setState({ lon: long });
    });

    console.log('lat:', this.state.lat);
    console.log('lon:', this.state.lon);
  };
  handleLocationAirQualityData = () => {
    let url = `https://api.waqi.info/feed/geo:${this.state.lat};${this.state.lon}/?token=${process.env.REACT_APP_TOKEN}`;
    console.log('air-data:', url);
    fetch(url) //api for the get request
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pollutionData: data });
        this.handleLocationAirQualityDataTable();
        console.log(data);
      });
  };
  handleLocationAirQualityDataTable = () => {
    this.setState({ PollutionDataAsked: true });
    this.setState({ WeatherDataAsked: false });
    this.setState({ MapAskedPollution: true });
    this.setState({ MapAskedWeather: false });
  };
  handleLocationWeatherDataTable = () => {
    this.setState({ WeatherDataAsked: true });
    this.setState({ PollutionDataAsked: false });
    this.setState({ MapAskedPollution: false });
    this.setState({ MapAskedWeather: true });
  };
  handleLocationWeatherData = () => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&appid=${process.env.REACT_APP_WEATHER}`;
    console.log('weather-data:', url);
    fetch(url) //api for the get request
      .then((response) => response.json())
      .then((data) => {
        this.setState({ weatherData: data });
        this.handleLocationWeatherDataTable();
        console.log(data);
      });
  };

  render() {
    return (
      <div className='App'>
        <div className='botton-pallete'>
          <div className='logo'>
            <img src={logo} />
          </div>
          <button onClick={this.handleLocationClick}>Locate Me</button>
          <button onClick={this.handleLocationAirQualityData}>
            Get Pollution-Data
          </button>
          <button onClick={this.handleLocationWeatherData}>
            Get Weather-Data
          </button>
          {
            <>
              <div className='locanto'>Lat:{this.state.lat}</div>
              <div className='locanto'>Lat:{this.state.lon}</div>
            </>
          }
        </div>
        <div className='display-pallete'>
          {this.state.PollutionDataAsked && (
            <Table data={this.state.pollutionData} />
          )}
          {this.state.WeatherDataAsked && (
            <WeatherTable data={this.state.weatherData} />
          )}
          {this.state.MapAskedPollution && (
            <Mapbox
              data={this.state.pollutionData}
              latitude={this.state.lat}
              longitude={this.state.lon}
            />
          )}
          {this.state.MapAskedWeather && (
            <Mapbox2
              data={this.state.weatherData}
              latitude={this.state.lat}
              longitude={this.state.lon}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
