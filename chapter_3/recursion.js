const isEven = (num) => {
	if (num === 0) {
    	return true;
    } else if (num === 1) {
        return false;
    } else if (num < 0) {
        return "Not a positive number.";
    } else {
        return isEven(num - 2);
    };
}

// Tests from the book
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??