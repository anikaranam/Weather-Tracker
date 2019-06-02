import React, {Component} from 'react';
import "./stylingFile.css";

    const styling = {
        backgroundColor: "orange"
    }

    const styling2 = {
      margin: "0 auto"
    }

    class App extends React.Component {
      constructor(props) {
        super(props)
        
        this.state = {

          weatherData: {

            current: {

              temp_c: 0.0,
              humidity: 0,
              wind_kph: 0

            }
          }
        }

        this.clickHandle = this.clickHandle.bind(this)
      }

      clickHandle() {

        let cityName = document.getElementById('getCityName').value // value of city name entered by user
        fetch('http://api.apixu.com/v1/current.json?key=beb215fe1efd4e9c819133547190206&q=' + cityName)
        .then(res => res.json())
        .then((data) => {
          // updating state based on API call
          this.setState({ weatherData: data });
          console.log(this.state.weatherData);
        })
        .catch(() => {
          // incorrect place entered
          alert('Place does not exist')
        })

      }


      getYear() {
        return (<div>{this.state.weatherData.location.name}</div>)
      }

      getTemp() {
        //return (this.state.weatherData.current.temp_c)
        if (this.state.weatherData.current == undefined) {
          return 0
        } else {
          return (this.state.weatherData.current.temp_c)
        }
      }

      getHumidity() {
        //return (this.state.weatherData.current.temp_c)
        if (this.state.weatherData.current == undefined) {
          alert('place does not exist')
          return 0
        } else {
          return (this.state.weatherData.current.humidity)
        }
      }

      getWindSpeed() {
        //return (this.state.weatherData.current.temp_c)
        if (this.state.weatherData.current == undefined) {
          return 0
        } else {
          return (this.state.weatherData.current.wind_kph)
        }
      }

      render () {
        return (
          //<Contacts weather={this.state.weather} />
          //<div><h1>Hello</h1>{this.getYear()}</div>
          <div style={styling}>
            <div>
              <h1 style={{textAlign: "center"}}> Weather </h1>
            </div>
            <div>
              <img className="centering"
              src="http://winsource.com/wp-content/uploads/2013/02/weather-flow-icon.png" />
            </div>
            <div style={{paddingBottom: 500, textAlign: "center", fontSize: 30}}>
              <input className="centerTextBox" style={{marginTop: 20}} type="text" id="getCityName"></input>
              <button className="centerTextBox" style={{marginTop: 20, marginBottom: 20}} onClick={this.clickHandle}>Submit</button>
              The temperature in Celsius is : {this.getTemp()}<br />
              The humidity is : {this.getHumidity()} %<br />
              The wind speed is : {this.getWindSpeed()} km/hr
            </div>
            <div style={{backgroundColor: "orange", marginBottom: 500}}>
            </div>

          </div>
        )
      }
    }


























    export default App;














    