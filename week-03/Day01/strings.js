// A string is a sequence of characters
"Hello"
// JSON uses double quotes so better to start doing that.
""
// Empty string is fine

"hello" + "world"
// concatenation for combining strings together.

10 + "10" 
// = "1010"

"10" + 10
// = "1010"
// concatenates to 
// + is overloaded
// if one side is a string it does concatenation

10 + 10 + "12"
// becomes "2012"

+"10"
// turns this into a number
// + before hand is a unary operator, so it turns it into a number

+"10" + 10
// = 20

10 / "2"
// Uses type coercion to turn the string into a number, since the '/' operator only can work with numbers

// IT'S HARD TO CHANGE STUFF WITH JAVASCRIPT SEEING AS IT RUNS IN THE BROWSER AND WILL BREAK EVERY OLD SITE IF YOU DO - and it was a rushed language to begin with! 
// Hence it's famously a bit weird...

