
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
let max;
if (!array){
    return 0;
}
if (array.length === 0){
    return 0;
}
    max = array[0];
        array.forEach(element => {
            if (max < element) {
                max = element;
            }
    });

  return max;
}

exports.avg = function avg (array) {
    if (!array) {
        return 0;        
    }
    if (array.length === 0) {
        return 0;
    }
  let sum;
  sum = 0;
  array.forEach(element =>{
      sum += element;
  })
    return sum / (array.length);
}
