// Devuelve cuántas horas del dia quedan para renderizar, sino, renderiza las 24 horas del dia siguiente
function getRemainingTime(dataToday, dataTomorrow) {
  const thisTime = new Date() / 1000;
  const remainingTime = [];
  for (let i = 0; i < dataToday.length; i++) {
    if (dataToday[i].time_epoch > thisTime) {
      remainingTime.push(dataToday[i]);
    }
  }

  if (remainingTime.length < 12) {
    let addedHours = 12 - remainingTime.length;
    for (let j = 0; j < addedHours; j++) {
      remainingTime.push(dataTomorrow[j]);
    }
  }

  return remainingTime;
}

export default getRemainingTime;
