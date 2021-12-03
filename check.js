import { stringLower , stringUpper } from "./main";
stringUpper("Shahzaib");
//Use * to Import Everything from a File
import * as stringFunctions from "./main.js";
stringFunctions.stringLower("Moin");
//Importing Default Export Value
import subtract from "./main.js";
subtract(5,6);
