function allLongestStrings(inputArray) {
    //const inputArray = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
    console.log(inputArray.max)
    var max = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length >= max) {
            max = inputArray[i].length;
        }
    }
    var newArr = []
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == max) {
            newArr.push(inputArray[i])
        }
    }
    console.log(newArr)
}


