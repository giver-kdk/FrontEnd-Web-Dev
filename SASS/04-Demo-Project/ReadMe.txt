********** SASS and BEM **********
- SASS encourages BEM (Box, Element and Modifier) class naming convention
- Using "&" inside a selector means the same selector. Eg: 
.grid
{
	// '&' is replaced by '.grid' after compiling
	&__main		// This means '.grid__main'
	{

	}
}

********** Mixins in SASS **********
- Mixin is like a functional react component for stylesheet
- Mixin returns desired style property code snippet to be reused again
- Just like react component having different values according to props, 
  mixin gives different styles according to the argument 