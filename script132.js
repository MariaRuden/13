var numbers = [1, 4, 6, 1, 3, 2];
var number = 4;
var lastIndex= -1;

for(var i = 0; i < numbers.length; i++){
  if(numbers[i] === number){
    lastIndex = i;
  }
}
