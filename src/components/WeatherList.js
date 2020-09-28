import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends React.Component {
  renderWeather(data) {
    const temps = _.map(data.list.map(weather => weather.main.temp), temp => temp - 273);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const { lat, lon } = data.city.coord;
    
    return (
      <tr key={data.city.id}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="orange"  units="°C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressuer (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);