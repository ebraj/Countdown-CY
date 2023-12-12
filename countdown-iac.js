window.addEventListener("load", function () {
  // Your countdown initialization logic here
  const days1 = document.querySelector("#days");
  const hours1 = document.querySelector("#hours");
  const minutes1 = document.querySelector("#minutes");
  const seconds1 = document.querySelector("#seconds");
  const newYears = "Jan 10 2024 19:00:00";

  function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const remainingTime = newYearsDate - currentDate;
    if (remainingTime >= 0) {
      const totalSeconds = (newYearsDate - currentDate) / 1000;
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds % 60);

      days1.innerHTML = formatTime(days);
      hours1.innerHTML = formatTime(hours);
      minutes1.innerHTML = formatTime(minutes);
      seconds1.innerHTML = formatTime(seconds);
    }
  }
  countdown();

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  setInterval(countdown, 1000);
});
