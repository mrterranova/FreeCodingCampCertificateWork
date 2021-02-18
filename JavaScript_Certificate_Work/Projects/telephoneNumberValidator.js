function telephoneCheck(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[0] == '-' || str[str.length - 1] == ')') return false;
        if (str[i] == '(') count++;
        if (str[i] == ')') count--;
    }
    let myRegex = /\(|\)|-|\s+/g
    let go = str.replace(myRegex, "")

    let decide = (go.length == 10 && count == 0) ? true : (go.length == 11 && go[0] == 1 && count == 0) ? true : false;
    return decide;
}