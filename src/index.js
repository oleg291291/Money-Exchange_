// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    var h, q, d, n, p;
    var hC, qC, dC, nC, pC;
    var result = []
    h = 50;
    q = 25;
    d = 10;
    n = 5;
    p = 1;
if (currency >= h){
    hC = Math.floor(currency / h);
    currency = currency % h;
}
if (currency >= q){
    qC = Math.floor(currency / q);
    currency = currency % q;
}
if (currency >= d){
    dC = Math.floor(currency / d);
    currency = currency % d;
}
if (currency >= n){
    nC = Math.floor(currency / n);
    currency = currency % n;
}
if (currency >= p){
    pC = Math.floor(currency / p);
    currency = currency % p;
}
    console.log(hC);
    console.log(qC);
  console.log(dC);
  console.log(nC);
  console.log(pC);


makeExchange(18);
}
