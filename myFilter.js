function myFilter(arr, callback) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
  	if (callback(arr[i], i, arr)) {
  	newArr.push(arr[i]);
  }
 }
 return neArr;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myFilter;
