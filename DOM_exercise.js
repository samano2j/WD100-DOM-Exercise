/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

function highlightWord (word) {
  
  if (word.replace(/[^a-zA-Z0-9 ]/g, '').length > 8) {
    word = '<span style="background:yellow;">' + word + '</span>';
  }
  
  return word;
}

var str = document.querySelector("p").innerText;
var word = str.trim().split(' ');

for (var i = 0; i < word.length; i++) {
  word[i] = highlightWord(word[i]);
}

newStr = word.join(' ');

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const link = document.createElement("a");
link.setAttribute('href', ('http://officeipsum.com/'));
const linkText = document.createTextNode("Link back to the Source");
link.appendChild(linkText);

const element = document.querySelector("p");
element.after(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

newStr = newStr.replaceAll('.', '.<br>');

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

var wordCount = document.querySelector("p").innerText;

var word = wordCount.trim().split(' ');

const totalWords = document.createElement("h1");
const totalWordText = document.createTextNode("Word Count: " + word.length);
totalWords.appendChild(totalWordText);

const headElement = document.querySelector("h1");
headElement.after(totalWords);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

newStr = newStr.replaceAll('?', '🤔');
newStr = newStr.replaceAll('!', '😲');


document.querySelector("p").innerHTML = newStr;
