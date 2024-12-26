import converTime from './converTime';

function getDataTable(data) {
  const dataTable = [];
  for (let i = 0; i < data.length; i++) {
    let aux = {
      key: data[i].time_epoch,
      date: converTime(data[i].time_epoch),
      temp: data[i].temp_c,
      condition: data[i].condition.text,
      cloud: data[i].cloud,
      wind: data[i].wind_kph,
      humidity: data[i].humidity,
    };
    dataTable.push(aux);
  }

  return dataTable;
}

export default getDataTable;
