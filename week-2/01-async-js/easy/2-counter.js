function counter(i = 1) {
//   const timer =
   setTimeout(() => {
    console.log(i);
    counter(i + 1);
  }, 1000);
//   clearTimeout(timer);
}

counter();
