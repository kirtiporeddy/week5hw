function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  
    document.getElementById("hour").textContent = hours;
    document.getElementById("minute").textContent = ("0" + minutes).slice(-2);
    document.getElementById("second").textContent = ("0" + seconds).slice(-2);
    document.getElementById("period").textContent = period;
  
    if (hours >= 7 && hours < 19) {
      document.getElementById("icon").classList.remove("night");
    } else {
      document.getElementById("icon").classList.add("night");
    }
  
    setTimeout(updateTime, 1000);
  }
  
  updateTime();console.log('Start ticking...')