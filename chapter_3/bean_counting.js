const countBs = (str) => {
  	let count = 0;
	for (let i = 0; i <= str.length - 1; i++) {
    	if (str[i] === "B") {
        	count += 1;
        };
    };
  	return count;
}

const countChar = (str, char) => {
	let count = 0;
  	for (let i = 0; i <= str.length - 1; i++) {
    	if (str[i] === char) {
        	count += 1; 
        };
    };
  	return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4