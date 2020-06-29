console.log(123);



function destroyer(arr) {
    let a = [];
        for (let k in arguments) {
         a[k] = arguments[k];
}
    console.log(a);
    let arr1 = a[0];

    let arr2 = [];
    arr2 = a.slice(1)
    console.log(arr1);
    console.log(arr2);
    let arr1El = [];
    let arr2El;

    // for(let k in arr2){
    //     if(arr2[k]);
    //     console.log(arr2[k]);
    //     for(let j in arr1){
    //         console.log(arr1.indexOf(arr2[k]));
    //         if(arr1.indexOf(arr2[k]) >= 0){
    //           arr1.splice((arr1.indexOf(arr2[k])),1);
    //         }
    //     }
    // }
    for(let k in arr1){ // code for removing duplicate from two arrays
        if(arr2.indexOf(arr1[k]) < 0){
            arr1El.push(arr[k]);
        }
    }
    console.log(arr1El);
    return arr1El;
}

// destroyer([9, 1, 2, 3, 1, 4, 2, 8],  3, 4, 1); // [9, 2, 2, 8]
// destroyer(["tree", "hamburger", 53], "tree", 53) //should return ["hamburger"].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // should return [1, 5, 1].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") // should return [12,92,65]
// destroyer([2, 3, 2, 3, 2, 3], 2, 3) // should return []