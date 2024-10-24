function able(chosen, me) {
    let add = chosen + me;
    let minus = chosen - me;
    let div = chosen / me;
    let times = chosen * me;
    console.log(add + ' ' + minus + ' ' + div.toFixed(2) + ' ' + times);
} able(34, 87);