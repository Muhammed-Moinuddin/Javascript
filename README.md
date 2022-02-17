# Javascript
A repository for practice of Javascript

Difference b/w .splice() & .substr()
.splice() removes & add items in an array. NOT IN STRING
.slice() copy specific part of a string, array & is a bit different from substr.
.substr() copy specific part of a string.

Difference b/w constructor & instanceof & typeof
1) constructor if you want to check if the variable is a string, number or boolean and it doesn't matter if it's a primitive type or an object.
2) instanceof if you want to check if the variable is a String, Number or Boolean object and not a primitive type.
3) typeof if you want to check if the type of the variable is a primitive type and not an object.

Line 1707
If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function. Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.