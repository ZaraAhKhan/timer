const timer = function(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`*beep* at ${array[i]} second(s)`);
    }, array[i] * 1000);
  }
};
const array = process.argv.slice(2);
timer(array);
module.exports = timer;