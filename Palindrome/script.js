//Allowing user to feed the input 
// let input = prompt("Enter string/number");
// let newInput='';
// for(let i=input.length-1; i>=0; i--){
//     newInput = newInput + input[i];
// }
// if(input==newInput){
//     console.log(`${input} is palindrome.`);
// }else{
//     console.log(`${input} is not palindrome.`);
// }

//Doesn't allow user to check theirs
let value  = '111';
let valueString='';
let reverseValue='';
if(typeof(value)=='number'){
    valueString = value.toString(); 
}else{
    valueString = value;
}
for(let i=valueString.length-1; i>=0; i--){
    reverseValue= reverseValue + valueString[i];
}
if(valueString==reverseValue) console.log(`${value} is a palindrome.`)
else console.log(`${value} is not a palindrome.`)