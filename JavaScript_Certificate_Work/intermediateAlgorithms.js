function sumAll(arr) {
    let sum = 0;
    for (let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
        sum += i
    }
    return sum
}


function diffArray(arr1, arr2) {
    return arr1.filter(f => !arr2.includes(f)).concat(arr2.filter(f => !arr1.includes(f)))
}


function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments)
    args.splice(0, 1)
    return arr.filter(f => !args.includes(f))
    // return arr.filter(f => arr2.includes(f));
}


function myReplace(str, before, after) {
    let newAfter = ""
    if (startsWithCapitalLetter(before)) {
        newAfter = after[0].toUpperCase().concat(after.substring(1))
    } else {
        newAfter = after.toLowerCase();
    }


    return str.replace(before, newAfter);
}
function startsWithCapitalLetter(word) {
    return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
}


function pairElement(str) {
    let arr = []
    for(let i in str){
      switch(str[i]){
        case "A":
          arr.push(["A", "T"]);
          break; 
        case "T":
          arr.push(["T", "A"]); 
          break;
        case "C":
          arr.push(["C", "G"]); 
          break;
        case "G":
          arr.push(["G", "C"]);
          break;
      }
    }
    return arr;
  }

  