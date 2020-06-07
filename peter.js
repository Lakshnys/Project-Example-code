let salaries= {
    'John': 1000,
    'Pete': 300,
    'Mary': 550,
    'Mary1': 2550
    
}

let sal1= {
    'John': 1000,
    'Pete': 300,
    'Mary': 550,
    'Mary1': 2550
}
// function topSalary(salObj) {
//     if(Object.entries(salObj).length=== 0) return null;
//     let topSal= Math.max(...Object.values(salObj));
//     console.log(topSal);
//     console.log(...Object.keys(salObj));
//     console.log(...Object.values(salObj));
    
    
//     for(key in salObj) {
//         if(salObj[key] === topSal) {
//             return key;
//         }
//     }
// }

console.log(topSalary(salaries));
//(topSalary(salaries));            // Pete

function topSalary( sal1) {
    if ( Object.entries( sal1 ).length == 0 ) return null;
    return Object.entries( sal1 ).sort( ([nKey, nVal], [pKey, pVal]) => pVal - nVal ).filter( ([key, val], index, array) => (val == array[0][1]) ? true : false).map( ([name, sal1]) => name );
    }
    
