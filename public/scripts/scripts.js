const train = document.querySelector('.train');
const moveTrainBtn = document.getElementById('moveTrainBtn');
const stations = document.querySelectorAll('.station');
let currentStationIndex = 0;

moveTrainBtn.addEventListener('click', () => {
  currentStationIndex++;
  if (currentStationIndex >= stations.length) {
    currentStationIndex = 0;
  }
  moveTrainToStation(currentStationIndex);
});

function moveTrainToStation(stationIndex) {
  const station = stations[stationIndex];
  const stationRect = station.getBoundingClientRect();
  const trainLeft = stationRect.left - train.parentElement.getBoundingClientRect().left;
  train.style.left = trainLeft + 'px';
}
