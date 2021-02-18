const numberStore = [
    {num:1, rom:'I'}, 
    {num:4, rom: 'IV'}, 
    {num:5, rom: 'V'}, 
    {num:6, rom: 'VI'}, 
    {num:9, rom: 'IX'}, 
    {num:10, rom: 'X'}, 
    {num:40, rom: 'XL'},
    {num:50, rom: 'L'}, 
    {num:90, rom: 'XC'}, 
    {num:100, rom: 'C'},
    {num:400, rom: 'CD'}, 
    {num:500, rom: 'D'}, 
    {num:900, rom: 'CM'}, 
    {num:1000, rom: 'M'}

]

function convertToRoman(num) {
    let res =""
    for(let i=numberStore.length-1; i>=0; i--){
        if(numberStore[i].num <= num){
            num -= numberStore[i].num; 
            res += numberStore[i].rom; 
            i++
        }
    }
    return res

}