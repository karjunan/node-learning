"use strict";
function add(n1, n2) {
    if (n1 === 'number' && n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
console.log(add(1, 2));
