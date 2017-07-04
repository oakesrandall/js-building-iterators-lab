// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

//  CODE INSIDE HERE   //
var newArr = [];

//for each item in the array
	for (let i = 0; i < arr.length; i++) {
		// pass to callback
		//push into array
		newArr.push(callback(arr[i], i, arr));
	}
	return newArr;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/



//push into array




// export this function (you can ignore this for now)
module.exports = myMap;
