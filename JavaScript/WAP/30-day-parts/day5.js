/*
Desc: 
🌟 Today, we are detecting anagram strings with logic that will ignite your coding brilliance!✨

What is anagram anyway? You already knew it in your childhood. If we can form a word by rearranging the letters of another word, then they are anagrams. 
To detect anagram strings in JS, we follow these steps:

    Convert both strings to lowercase for consistency.
    Split the strings into character arrays.
    Sort both arrays in alphabetical order.
	Join those arrays into strings.
    If new strings are equal, they are anagrams.
*/
function areAnagrams(str1, str2) {
	const sorted1 = str1.toLowerCase().split('').sort().join('');
	const sorted2 = str2.toLowerCase().split('').sort().join('');
	return sorted1 === sorted2;
  }
  // Output: true
  console.log(areAnagrams('NCIT', 'NICT')); 

  