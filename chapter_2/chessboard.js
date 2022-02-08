let length = 12;
let rowA = "";
let rowB = "";

// Create dynamic rows
for (let i = 0; i < length; i++) {
  if (i === 0 || i % 2 === 0) {
     rowA = rowA + " #";
  } else {
     rowB = rowB + "# ";
  };
};

// Create dynamic height of board
for (let j = 0; j < length; j++) {
  if (j === 0 || j % 2 === 0) {
  	console.log(rowA);
  } else {
    console.log(rowB);
  };
}
  
console.log(rowA);
console.log(rowB);