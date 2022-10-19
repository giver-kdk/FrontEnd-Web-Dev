// Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string
function rearrange(str1, str2)
{
	let matchCount = 0;
	if(str1.length == str2.length)
	{
		for(let i = 0; i < str1.length; i++)
		{
			let alreadyChecked = [];
			for(let j = 0; j < str2.length; j++)
			{
				if((str1[i] == str2[j]) && !alreadyChecked.includes(j))
				{
					alreadyChecked.push(j);
					matchCount++;
					break;
				}
			}
		}
	}
	else return false;

	console.log(matchCount);
	if(matchCount == str1.length) return true;
	else return false;
}

console.log(rearrange("abc", "cab"));
console.log(rearrange("giver", "revig"));
console.log(rearrange("hello", "world"));