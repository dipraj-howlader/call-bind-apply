var name = " Dipraj ";
function add (num1, num2){
    window.result = num1 + num2;
    console.log(result);
    function double (number){
        return number * 2;

    }
    var total = double(result);
    return total;
}

var sum = add(14,14);
console.log(sum);
console.log('result outside',result);