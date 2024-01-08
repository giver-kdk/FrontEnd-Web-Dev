// Get reference of Elements representing all buttons
let operands = document.getElementsByClassName("operand");
let operator = document.getElementsByClassName("operator");
let feature = document.getElementsByClassName("feature");

// Get reference of input and output elements
let inputField = document.getElementById("user__input");
let outputField = document.getElementById("final__result");

let prevAns = 0, pressedEqual = false;
// Key Code values for keyboard functionality
const ENTER = 13, BACKSPACE = 8, DELETE = 46;


function decide_key_role(eventObj)
{
	let validInput = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "(", ")"];
	let validAction = [ENTER, BACKSPACE, DELETE];
	if(validInput.includes(eventObj.key))
	{
		console.log("Called Input");
		write_input(eventObj);
	}
	else if(validAction.includes(eventObj.keyCode))
	{
		console.log("Called Action");
		take_action(eventObj);
	}

}
// Input the operand and operator in the input field
function write_input(eventObject) 
{
	let data;
	if(eventObject.type == "click")
	{data = eventObject.target.innerHTML;}
	else if(eventObject.type == "keydown")
	{data = eventObject.key;}
	if(pressedEqual)
	{
		if((data != "+") && (data != "-") && (data != "×") && (data != "÷"))
		{inputField.innerHTML = ""; 
		outputField.innerHTML = "0";}
		else{inputField.innerHTML = "Ans";}
	}
	pressedEqual = false;
	if(eventObject.type == "click")
	{inputField.insertAdjacentText("beforeend", eventObject.target.innerHTML);}
	else if(eventObject.type == "keydown")
	{inputField.insertAdjacentText("beforeend", eventObject.key);}
	// console.log(data);

}

// Calculate the square root replace to simplify expression
function replace_sqrt(expression)
{
	if(expression.indexOf("√") != -1)												// Detect square root
	{
		let rootIndex = expression.indexOf("√");
		let rootEnd;
		// Detect number inside root
		for(let i = rootIndex; i <= expression.length; i++)				
		{
			rootEnd = i;
			if(((expression[i] != "√")) && (expression[i] != ".") && (expression[i] < "0")){break;}
		}
		rootNum = expression.slice(rootIndex, rootEnd);
		squareRoot = Math.sqrt(Number(expression.slice(rootIndex + 1, rootEnd)));	// Calculate square root 
		expression = expression.replace(rootNum, squareRoot);
		// Recursion function to calculate and replace all occurrance of root
		return replace_sqrt(expression);											// Continue for other possible roots
	}
	else{return expression;}
}
// Perform actions like generating result and delete operand/operator
function take_action(eventObject)
{
	// Define action based upon event
	let action;
	if(eventObject.type == "click")
	{
		action = eventObject.target.id;
	}
	else if(eventObject.type == "keydown")
	{
		if(eventObject.keyCode == ENTER)
		{action = "result";}
		else if((eventObject.keyCode == BACKSPACE) || (eventObject.keyCode == DELETE))
		{action = "delete";}
		else
		{return;}
	}
	// Perform task based upon upon above defined 'action'
	switch(action)
	{
		case "result":
			pressedEqual = true;					// Indicates result generation state
			let input = inputField.innerHTML;
			input = input.replaceAll("÷", "/");		// Replace UI operators with valid operators for 'eval()'
			input = input.replaceAll("×", "*");
			input = input.replaceAll("Ans", prevAns);
			input = replace_sqrt(input);			// Replace root with calculated square root
			// console.log(input);
			// 2-level error handling
			try
			{
				if(eval(input))						// 'eval()' returns evaluated string expression 
				{
					prevAns = eval(input);			
					outputField.innerHTML = prevAns;
				}
				else
				{throw "ERROR";}
			}
			catch(error)
			{outputField.innerHTML = "ERROR";}
			break;
		case "delete":
			if(!pressedEqual)						// Delete key is igonored in result generation state	
			{
				let str = inputField.innerHTML;
				// Remove all 3 character of "Ans", if "s" detected
				if(str.charAt(str.length -1) == "s")
				{inputField.innerHTML = str.slice(0, str.length - 3);}
				else
				{inputField.innerHTML = str.slice(0, str.length - 1);}
			}
			break;
		case "clear":
			inputField.innerHTML = "";
			outputField.innerHTML = "0";
			break;
	}

}
// Event Listerners for mouse click and keyword press
operands[0].addEventListener("click", write_input);
operands[1].addEventListener("click", write_input);
operands[2].addEventListener("click", write_input);
operands[3].addEventListener("click", write_input);
operands[4].addEventListener("click", write_input);
operands[5].addEventListener("click", write_input);
operands[6].addEventListener("click", write_input);
operands[7].addEventListener("click", write_input);
operands[8].addEventListener("click", write_input);
operands[9].addEventListener("click", write_input);
operands[10].addEventListener("click", write_input);

operator[0].addEventListener("click", write_input);
operator[1].addEventListener("click", write_input);
operator[2].addEventListener("click", write_input);
operator[3].addEventListener("click", write_input);
operator[4].addEventListener("click", write_input);
operator[5].addEventListener("click", write_input);
operator[6].addEventListener("click", write_input);
operator[7].addEventListener("click", write_input);

feature[0].addEventListener("click", take_action);
feature[1].addEventListener("click", take_action);
feature[2].addEventListener("click", take_action);

document.addEventListener("keydown", decide_key_role);
