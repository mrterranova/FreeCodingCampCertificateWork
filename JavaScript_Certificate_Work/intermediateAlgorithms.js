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



function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
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
    for (let i in str) {
        switch (str[i]) {
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

function fearNotLetter(str) {
    let missing = 0
    let ascii = str.split('').map(m => m.charCodeAt(0))
    let temp = ascii[0];
    for (let i = 0; i < ascii.length; i++) {
        if (ascii[i] != temp) {
            missing = temp;
            break;
        }
        temp++;
    }

    return (missing == "") ? undefined : String.fromCharCode(missing)
}

function uniteUnique(arr) {
    let args = Array.prototype.slice.call(arguments);
    let newArr = args.toString().split(",")
    return newArr.filter((x, index) => {
        return newArr.indexOf(x) === index;
    }).map(m => parseInt(m))
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))


function convertHTML(str) {
    return str.split("").map(m => m.replace("&", "&amp;")
        .replace(">", "&gt;").replace("<", "&lt;").replace("\"", "&quot;")
        .replace("'", "&apos;")).join("")
}

function sumPrimes(num) {
    let sum = 0;
    for(let i=0; i<=num; i++){
      if(isPrime(i)){
        sum+=i;
      }
    }
    return sum;
  }
  
  function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  function dropElements(arr, func) {
    let newArr =[]; 
    let rest = 0
    for(let i=0;i<arr.length; i++){
      if(func(arr[i])){
        newArr.push(arr[i])
        rest = i
        break;
      }
    }
    return newArr.length>0 ?newArr.concat(arr.splice(rest+1)): [];
  }