// This shows examples related with the Common Weakness Enumeration (CWE).

// function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
//     var arr = [1, 2, 3];
//     if (x < 0) {
//         arr[x] = 3;
//     }
// }

// function CWE_398() { // IDENTICAL_BRANCHES
//     if (x >= 0) {
//         y = x;
//     } else {
//         y = x;
//     }
// }

function CWE_476() { // NULL_POINTER
    var obj;
    // Add 1 line
    var y = obj.x;
    console.log(y);
}

function CWE_480_481() { // BAD_ASSIGN_IN_CONDITION
    var x = -1;
    if (x = -1) console.log('Error!', x);
}
