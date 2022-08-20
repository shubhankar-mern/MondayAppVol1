import React from 'react';

const Table = (props) => {
  console.log('props.data air :', props.data.data.iaqi);
  return (
    <div>
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>AQI </th>
              <th>CO </th>
              <th>
                NO<sub>2</sub>
              </th>
              <th>
                SO<sub>2</sub>
              </th>
              <th>
                O<sub>3</sub>
              </th>
              <th>
                PM<sub>25</sub>
              </th>
              <th>
                PM<sub>10</sub>
              </th>
              <th>DEW</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.data.data.aqi}</td>
              <td>{props.data.data.iaqi.co.v}</td>
              <td>{props.data.data.iaqi.no2.v} </td>
              <td>{props.data.data.iaqi.so2.v} </td>
              <td>{props.data.data.iaqi.o3.v}</td>
              <td>{props.data.data.iaqi.pm25.v} </td>
              <td>{props.data.data.iaqi.pm10.v} </td>
              <td>{props.data.data.iaqi.dew.v}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
