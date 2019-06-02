import React, {Component} from 'react';
import "./stylingFile.css";
//import Contacts from './components/contacts';


const Contacts = ({ weather }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {weather.map((weather1) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{weather1.name}</h5>
              </div>
            </div>
          ))}
        </div>
      )
    };

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
          //temperature: 0.0
        }
        this.clickHandle = this.clickHandle.bind(this)
      }

      /*componentDidMount() {
        fetch('http://api.apixu.com/v1/current.json?key=beb215fe1efd4e9c819133547190206&q=Paris')
        .then(res => res.json())
        .then((data) => {
          this.setState({ weatherData: data });
          console.log(this.state.weatherData);
        })
        .catch(console.log)
      }*/

      clickHandle() {
        let cityName = document.getElementById('getCityName').value
        fetch('http://api.apixu.com/v1/current.json?key=beb215fe1efd4e9c819133547190206&q=' + cityName)
        .then(res => res.json())
        .then((data) => {
          this.setState({ weatherData: data });
          console.log(this.state.weatherData);
          //alert(this.state.weatherData.current.temp_c)
        })
        .catch(() => {
          alert('Place does not exist')
        })
        //document.getElementById('displaying').innerHTMl = this.state.weatherData.current.temp_c 
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
              src="data:image/png;base64,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" />
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














    