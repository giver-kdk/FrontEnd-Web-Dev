// Write a JavaScript program to simplify a given absolute path for a file in Unix-style
// NOTE: "./" means current directory and "../" one step back directory to perform

function simplify(path)
{
	let j = 0;
	let pathArr = path.split("/");
	let result = [];
	for(let i = 0; i < pathArr.length; i++)
	{
		// Simply skip emptyness and single dot
		if(pathArr[i] == "" ||  pathArr[i] == ".")
		{
			continue;
		}
		// Go one step back when ".." is used
		else if(pathArr[i] == ".." && j > 0)
		{
			j--;
		}
		// Simply store other path names
		else 
		{
			result[j] = pathArr[i];
			j++;
		}
	}
	return result.join("/");
}


console.log(simplify("/home/var/./www/../html//sql/"));