
exports.min = function min (array) {

    let min;
    if (!array){
        return 0;
    } 
    if (array.length === 0){
        return 0;
    }  
    min = array[0];
        array.forEach(element => {
        if (min > element) {
            min = element;
        }     
    });
  return min;
}

exports.max = function max (array) {
let = max;
if (!array){
    return 0;
}
if (array.length === 0){
    return 0;
}

  return max;
}

exports.avg = function avg (array) {
  return 0;
}
