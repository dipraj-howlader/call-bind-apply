var name = " Dipraj ";
function add (num1, num2){
    result = num1 + num2;
    console.log(result);
    function double (number){
        return number * 2;

    }
    var total = double(result);
    return total;
}
console.log('result outside',result);
var sum = add(14,14);
console.log(sum);
