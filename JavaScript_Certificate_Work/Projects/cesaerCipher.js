function rot13(str) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let newStr = ""
    let convertedArr = str.split(" ").map(word => word.split("").map(m => { if (alpha.includes(m)) { return alpha.indexOf(m) - 13 } else { return m } }))
    console.log(convertedArr)
    for (let i = 0; i < convertedArr.length; i++) {
        for (let j = 0; j < convertedArr[i].length; j++) {
            if (convertedArr[i][j] >= 0) {
                newStr += alpha[convertedArr[i][j]]
            } else if (convertedArr[i][j] < 0) {
                let temp = convertedArr[i][j] + 26
                newStr += alpha[temp]
            } else {
                newStr += convertedArr[i][j]
            }

        }
        newStr += " "
    }
    return newStr.trim();
}