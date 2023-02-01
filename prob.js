let totalCost = [
  { name: "Samsung M33", price: 10000 },
  { name: "Samsung Charger", price: 500 },
  { name: "Haveit Speakers", price: 2500 },
];
let sum = 0;
for (let i = 0; i < totalCost.length; i++) {
  sum += totalCost[i].price;
}
console.log(sum);

let input = [{ fname: "John" }, "fname"];
let object = input[0];
let str = input[1];
if (Object.keys(object) == str) {
  delete object[str];
  console.log("YES");
}
console.log(input);

function temperatureConverter(valNum) {
  return parseFloat(((valNum - 32) / 1.8).toFixed(2));
}
let x = temperatureConverter(50);
console.log(x);

function addString(str1, str2) {
  return str1.concat(" ", str2);
}
console.log(addString("hello", "a"));

function getLetter(s) {
  let letter;
  // Write your code here
  let fL = s.charAt(0);
  switch (fL) {
    case "a" || "e" || "i" || "o" || "u": {
      letter = "A";
      break;
    }
    case "b" || "c" || "d" || "f" || "g": {
      letter = "B";
      break;
    }
    case "h" || "j" || "k" || "l" || "m":
      letter = "C";
      break;
    default:
      letter = "D";
  }

  return letter;
}

console.log(getLetter("abcd"));

function secondLargest(numbers) {
  //Write your code here
  //Don't forget to return
  let tempArr = numbers;
  function findMax(arr) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  let largest = findMax(tempArr);
  let largestIndex = tempArr.indexOf(largest);
  tempArr.splice(largestIndex, largestIndex);
  let secondLar = findMax(tempArr);
  return secondLar;
}
console.log(secondLargest([34, 67, 555, 12]));
