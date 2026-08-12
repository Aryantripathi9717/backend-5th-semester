function add(a,b){
    console.log(a+b)
}
function subtract(a,b){
    console.log(a+b)
}
function multiply(a,b){
    console.log(a+b)
}
function divide(a,b){
    if(b==0){
        console.log("can't divide with 0")
    }
    console.log
}

let a = Number(prompt("Enter operands 1st"))
let  b= Number(prompt("Enter operands 2nd"))
let ch = String(prompt("Enter operator"))

switch(ch){
    case "+" : add(a,b);
                break
    case "-" : subtract(a,b)
                break
    case "*" : multiply(a,b)
                break
    case "/" : divide(a,b)
                break
    default : console.log("provide valid operator");
    
}