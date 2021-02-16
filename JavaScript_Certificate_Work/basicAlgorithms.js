function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (9 / 5) * celsius + 32;
  return fahrenheit;
}

function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

function factorialize(num) {
  if (num === 1 || num == 0) return 1;
  let fact = num;
  return fact * factorialize(num - 1);
}

function findLongestWordLength(str) {
  let words = str.split(" ")
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length
    }
  }
  return max;
}

function largestOfFour(arr) {
  let max = [];
  for (let i in arr) {
    max.push(Math.max(...arr[i]))
  }
  return max;
}

function confirmEnding(str, target) {
  return str.substring(str.length - target.length) == target;
}

function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  if (num == 1) return str;
  return str + repeatStringNumTimes(str, num - 1);
}

function truncateString(str, num) {
  return (str.length > num) ? (str.substring(0, num) + "...") : str;
}

function findElement(arr, func) {
  let num = arr.filter(n => func(n));
  return num[0];
}

function booWho(bool) {
  return typeof (bool) == "boolean" ? true : false;
}

function titleCase(str) {
  return str.split(" ").map(w =>
    w[0].toUpperCase() + w.substring(1,).toLowerCase()
  ).join(" ");
}

function frankenSplice(arr1, arr2, n) {
  let arr2Copy = [...arr2];
  let end = arr2Copy.splice(n)
  let res = arr2Copy.splice(0, n).concat(arr1).concat(end)
  return res;
}

function bouncer(arr) {
  return arr.filter(Boolean)
}

function getIndexToIns(arr, num) {
  let copyArr = [...arr].concat(num)
  return copyArr.sort((a, b) => a - b).indexOf(num)
}

function mutation(arr) {
  let copyArr = arr[1].toLowerCase().split("")
  let copyArr2 = arr[0].toLowerCase().split("")
  console.log(copyArr, copyArr2)
  return copyArr.filter(f => !copyArr2.includes(f)) == 0
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i = i + size) {
    if ((i + 1) % size != 0) {
      let temp = []
      for (let j = i; j < i + size; j++) {
        if (j + 1 > arr.length) break;
        temp.push(arr[j])
      }
      newArr.push(temp)
    }
  }
  return newArr;
}