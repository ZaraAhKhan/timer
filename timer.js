const timer = function(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
    if (array[i] > -1 && (Number.isInteger(array[i]))) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(`*beep* at ${array[i]} second(s)`);
      }, array[i] * 1000);
    }
  }
};
let array = process.argv.slice(2);
timer(array);

module.exports = timer;