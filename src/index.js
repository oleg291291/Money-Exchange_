// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result = {};

    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
    else {
        var h, q, d, n, p;
        var hC, qC, dC, nC, pC;
        var result = {};

        h = 50;
        q = 25;
        d = 10;
        n = 5;
        p = 1;

        if (currency >= h) {
            hC = Math.floor(currency / h);
            currency = currency % h;
            result.H = hC;
        }
        if (currency >= q) {
            qC = Math.floor(currency / q);
            currency = currency % q;
            result.Q = qC;
        }
        if (currency >= d) {
            dC = Math.floor(currency / d);
            currency = currency % d;
            result.D = dC;
        }
        if (currency >= n) {
            nC = Math.floor(currency / n);
            currency = currency % n;
            result.N = nC;
        }
        if (currency >= p) {
            pC = Math.floor(currency / p);
            currency = currency % p;
            result.P = pC;
        }
        return result;
    }
}
