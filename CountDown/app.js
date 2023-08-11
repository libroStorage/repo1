const time = document.getElementById('time');

function updateCountdown() {
  const currentDate = new Date();
  const targetDate = new Date('September 6, 2023 15:00:00');
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = `${days}`;
  document.getElementById('hours').textContent = `${hours}`;
  document.getElementById('minutes').textContent = `${minutes}`;
  document.getElementById('seconds').textContent = `${seconds}`;

  if (timeRemaining <= 0) {
    document.getElementById('seasonMessage').textContent =
      'The season is out now!';
    document.getElementById('countdown').style.display = 'none';
  } else {
    document.getElementById('seasonMessage').textContent = '';
    document.getElementById('countdown').style.display = 'grid';
  }
}

updateCountdown();

setInterval(updateCountdown, 0);
