function foo(){
    const a = 1;
    a = 3;
}

function poo(){
    var arr = [1, 2, 3];
    if (x < 0) {
        arr[x] = 3; // ARRAY_INDEX_NEGATIVE alarm: x is negative but is used as array index.
    }
}

function aoo() {
    let christmas = new Date(2020, 12, 25); // BAD_MONTH_ARG alarm
}

function CWE_628() { // TOO_MANY_ARGS
    function add(x, y) {
        return x + y;
    }
    var sum = add(1, 2, 3);
    console.log(sum);
}
