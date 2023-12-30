function clock(is12Hour = false) {
  setInterval(function () {
    const date = new Date();
    console.log(date.toLocaleTimeString([], { hour12: is12Hour }));
  }, 1000);
}

clock();
clock(true);
