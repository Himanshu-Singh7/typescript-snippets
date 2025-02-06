var Val;
(function (Val) {
    Val[Val["Red"] = 0] = "Red";
    Val[Val["Green"] = 1] = "Green";
    Val[Val["Blue"] = 2] = "Blue";
})(Val || (Val = {}));
console.log(Val);
console.log(Val[0]);
