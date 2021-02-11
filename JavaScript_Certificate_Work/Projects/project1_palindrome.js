palindrome = (str) => {
    return str.toLowerCase().replace(/[^\w]/gi, '').replace('_','') 
    == str.toLowerCase().split("").reverse().join("").replace(/[^\w]/gi, '').replace('_','') 
}
 