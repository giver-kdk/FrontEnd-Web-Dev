/*
The nested function of any level can access all parents data.
i.e; Child can acess grandfather's data too

*/

function grand_parent()
{
	let grandParentData = 20;
	function parent()
	{
		let parentData = 10;
		function child()
		{
			
			console.log("I got the data1: ", parentData);
			console.log("I got the data2: ", grandParentData);
		}
		console.log("Accessing Data inside Parent Function");
		child();
		return child;					// Returns (child + parent's data) as 'Closure'
	}
	let returnedChild = parent();
	return returnedChild;				// Returns (child + parent's data + grand_parent's data)
}


let grandChild = grand_parent();		// 'grand_parent' returns 'child' function indirectly 

console.log("Accessing Parent Data outside Parent Function");
grandChild();						// Using 'child' function outside 'parent' function