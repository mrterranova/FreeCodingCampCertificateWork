const converter = {
  "ONE HUNDRED": 10000,
  "TWENTY": 2000,
  "TEN":1000,
  "FIVE":500,
  "ONE": 100, 
  "QUARTER": 25,
  "DIME": 10, 
  "NICKEL": 5, 
  "PENNY": 1
}


function checkCashRegister(price, cash, cid) {
let difference = (cash-price >= 0) ? (cash-price)*100: undefined;
let cidTotal = getAllInDrawer(cid);
let status = getRegisterStats(difference, cidTotal);
let finalChangeCount = getFinalChangeCount(difference, cid)


let res = {status: status, change: finalChangeCount}
let finalTotal = 0;
for(let i=0; i< res.change.length; i++){
  
  for(let j=0; j< res.change[i].length; j++){
    finalTotal += res.change[i][1]
  }
}

return (difference > finalTotal*100 ) ? {status: 'INSUFFICIENT_FUNDS', change: []} : (res.status === 'CLOSED') ? {status:'CLOSED', change: cid}: res;
}

function getRegisterStats(difference, cidTotal){
console.log(difference, cidTotal)
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
  sum += (cid[i][1])*100
}
return sum.toFixed(2)
}

function getFinalChangeCount(difference, cid){
const change = []
for(let i=cid.length-1; i>=0; i--){
  const name = cid[i][0]
  const total = Math.round(cid[i][1]*100)
  const val = converter[name]
  let amount = Math.round(total/val)
  let returnCurrency = 0; 

  while(difference >= val&& amount > 0){
    difference -= val; 
    amount--; 
    returnCurrency++;
  }
  if(returnCurrency > 0){
    change.push([name, (returnCurrency * val/100)])
  }
}

return change
}



// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))