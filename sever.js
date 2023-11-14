const express = require('express');
const app = express();
const PORT = 3000;

const trainSchedules = {
  'train001': ['Station A', 'Station B', 'Station C', 'Station D'],
  'train002': ['Station X', 'Station Y', 'Station Z'],
};

app.use(express.static('public'));

app.get('/api/nextStation/:trainId/:currentStation', (req, res) => {
  const { trainId, currentStation } = req.params;
  const schedule = trainSchedules[trainId];

  if (!schedule) {
    return res.status(404).json({ error: 'Train not found' });
  }

  const currentIndex = schedule.indexOf(currentStation);

  if (currentIndex === -1) {
    return res.status(404).json({ error: 'Station not found' });
  }

  const nextIndex = currentIndex + 1;

  if (nextIndex >= schedule.length) {
    return res.json({ nextStation: 'Final destination reached' });
  }

  const nextStation = schedule[nextIndex];
  res.json({ nextStation });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
