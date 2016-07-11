var lettercount = function(string, letter) {

var count = 0;

for (i = 0; i < string.length; i++) {
  if(string[i].toLowerCase() === letter.toLowerCase() ) {
    count += 1;
  }
}
if (count > 0) {
  console.log(count);
} else {
  console.log("Not found");
}
}

lettercount("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.", "l");

lettercount("This letter is L", "l");
