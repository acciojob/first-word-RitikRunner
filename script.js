function firstWord(s) {
  // your code here
	let word = s.trim().split(" ")[0]; 
	return word
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));   
