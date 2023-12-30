function counter() {
  let i = 0;
  setInterval(function () {
    i += 1;
    console.log(i);
  }, 1000);
}

counter();
