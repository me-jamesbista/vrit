let num = prompt("Enter a number");
let intNum = Number(num);

for(let i =1; i<=intNum; i++){
    if(intNum % i == 0){
       var count=count+1;
    }
}
console.log(count);
if(count==2){
    console.log(intNum + " is a prime");
}else if(count==1){
    console.log(intNum + " is neither a prime nor a composite")
}else{
   console.log(intNum + " is a compsoite");
}

