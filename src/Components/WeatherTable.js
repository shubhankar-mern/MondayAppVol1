import React from 'react';

const WeatherTable = (props) => {
  console.log('props.data weatner :', props.data.current);
  return (
    <div>
      <div>
        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>Clouds </th>
                <th>Dew Point</th>
                <th>Humidity</th>
                <th>Pressure</th>
                <th>Temperature</th>
                <th>Visibility</th>
                <th>Timezone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.data.current.clouds} </td>
                <td>{props.data.current.dew_point} </td>
                <td>{props.data.current.humidity} </td>
                <td>{props.data.current.pressure}</td>
                <td>{props.data.current.temp} </td>
                <td>{props.data.current.visibility} </td>
                <td>{props.data.timezone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WeatherTable;
