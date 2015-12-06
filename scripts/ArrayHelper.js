// Copied from http://www.stephanimoroni.com/how-to-create-a-2d-array-in-javascript/
export function matrix(numrows, numcols, initial){
 var arr = [];
 for (var i = 0; i < numrows; ++i){
    var columns = [];
    for (var j = 0; j < numcols; ++j){
       columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}
