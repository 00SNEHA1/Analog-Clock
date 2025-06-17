 function updateClock() {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();

      document.getElementById('hour').style.transform = `translateX(-50%) rotate(${30 * hour + minute / 2}deg)`;
      document.getElementById('minute').style.transform = `translateX(-50%) rotate(${6 * minute}deg)`;
      document.getElementById('second').style.transform = `translateX(-50%) rotate(${6 * second}deg)`;
    }
    setInterval(updateClock, 1000);
    updateClock();
