// Desc: Learn a clever technique to remove duplicates from an array in JavaScript! 🗃️✂️ 
function removeDuplicates(arr) {
	// 'Set' object eliminates repetation
	return [...new Set(arr)];
  }
  // Output: [1, 2, 3, 4, 5]
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
  