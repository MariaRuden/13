var numbers = [1, 4, 6, 1, 3, 2];
var number = 4;
console.log('Индекс числа ' + number + ' в массиве : ' + numbers);

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === number) {
    var lastIndex = i;
  }
}

if (!lastIndex) {
    lastIndex = -1;
}

console.log('Индекс числа в массиве равен = ' + lastIndex);
