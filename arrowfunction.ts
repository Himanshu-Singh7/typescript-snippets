// 1.Arraw function
var addVal = (x1 : number , x2 : number) : number => {
    return x1 + x2;
}

var result =addVal(10, 20);
console.log(result);

// 2 . If we can remove the curly braces and return keyword. But I have return value the only we can removed the return keyword.

var addVal2 = (x1 : number , x2 : number) : number => x1 + x2;
var result2 =addVal2(30 , 40);
console.log(result2);

// 3. Return type is void 

var test = () : void => {
    console.log("Hello");
};
test();
// 4 .Arraw function return value 100

var test1 = () : number =>{
    return 100;
}
var result3 = test1();
console.log(result3);

// 5 . Developed a function multiply two values
var multiply = (x1: number , x2: number) : number => {
    return x1 * x2;
}
var result4 = multiply(10 , 20); // 200
console.log(result4);

// 6 . Create a Array to store the Three value 
var arr: number[] = [10, 20 , 30];
var printArray = (...arr : number[]) => {
    for(var i  : number = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
    }
}
printArray();

