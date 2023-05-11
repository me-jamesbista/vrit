let array=["ram is a good boy", "shyam is a good boy", "hari is a good boy"];
let dot ='....';
let newArray = array.filter(function(element){
    if(element.length>5){
        element.slice(5,element.length);
    }
});
console.log(array);
console.log(array[0].slice(5,array[0].length-1));