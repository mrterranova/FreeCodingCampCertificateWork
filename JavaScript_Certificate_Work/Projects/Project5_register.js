const converter = [
  { n: "ONE HUNDRED", v: 100}, 
  { n: "TWENTY", v: 20}, 
  { n: "TEN", v:10}, 
  { n: "FIVE", v:5}, 
  { n: "ONE", v: 1}, 
  { n: "QUARTER", v: .25}, 
  { n: "DIME", v: .10}, 
  { n: "NICKEL", v: .05}, 
  { n: "PENNY", v: .01}
]

function checkCashRegister(price, cash, cid) {
  let difference = (cash-price >= 0) ? parseFloat(cash-price).toFixed(2) : undefined;
  let cidTotal = getAllInDrawer(cid);
  let status = getRegisterStats(difference, cidTotal);
console.log()
  for(let i=0; i < converter.length; i++){
    console.log(converter.length)
    if(difference> converter[i].v ){
      let indVal = converter[i].v
      for(let j=cid.length-1; j>=0; j--){
        if(difference> cid[j][1]){
          let cidVal = cid[j][1]
          let cidName = cid[j][0]
          let amount = Math.floor(cidVal/indVal)
        }
      }
    }
  }

  let res = {status: status, change: difference}
  return res;
}

function getRegisterStats(difference, cidTotal){
  if(difference > cidTotal){
    return "INSUFFICIENT_FUNDS"
  } else if (difference < cidTotal){
    return "OPEN"
  } else{
    return "CLOSED"
  }
}

function getAllInDrawer(cid){
  let sum = 0;
  for(let i=0; i<cid.length; i++){
    sum += cid[i][1]
  }
  return sum.toFixed(2)
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))