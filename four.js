// Firstly I fisrt define the function that I will use for the problem with one parameter
function firstPalindrome (words) {
  let ans; // Here I define the variable within which am going to store my answer
  for (i = 0; i < words.length; i++) { // Here I iterate over each item in the words arry
    let normalString = words[i] // Here I store my unchanged item in the normalString variable name
    let reversedString = normalString.split('').reverse().join('') // Here I reverse my normal string 
    if (normalString == reversedString) { // Here I compare the changed and unchanged string to check whether they are the same
      ans = normalString // Here I assign my already defined ans variable to the string that has passed the palindromic test
      return ans // Here I do a return to stop the for loop and return only the first palindromic string
    }
  }
  return ans; // Here the function returns my first palindromic string
}

// the code below is what I usd for testing

let t = ['racecar', 'rar', 'ada', 'drive']

let r = firstPalindrome(t)
console.log(r);

