function uniteUnique(arr){
    // console.log(arguments[2]);
    var unit = [];
    var a = Array.from(arguments);
    for(let k in a){
        // console.log(a[k]);
        a[k].forEach((el) =>{
            if(!unit.includes(el)) {
                // console.log(el);
                unit.push(el);
            }
        })
    }
    console.log(unit);
    return unit;
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// uniteUnique([1, 2, 3], [5, 2, 1]) // should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 
// should return [1, 2, 3, 5, 4, 6, 7, 8].
