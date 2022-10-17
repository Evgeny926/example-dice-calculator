

let r = 11; //sum
let n = 3; //dices
let s = 6; //sided
let arr = []; //dices

let favOutcomes = 0; //favorable outcomes
let totalOutcomes = 0; //total outcomes

//generate dices to roll
function populateDices(){
    let arr = [];
    for(let i = 0; i < n; i++){
        let arr2 = []
        for(let j = 1; j <= s; j++){
            arr2.push(j)
        }
        arr.push(arr2)
    }
    return arr;
}

//recursively roll all dices to get sum and identify favorable outcomes
function sum(num, array){
    if(array.length == 0){
        if(num == r){
            favOutcomes++
        }
    } else {
        let newArr = array.slice(1,array.length)
        for(let i = 0; i < array[0].length; i++){
            sum(num + array[0][i], newArr)
        }
    }
}

//button event and entry point
function display(){
    console.log("click")
    r = document.getElementById("sum").value
    n = document.getElementById("dices").value
    s = document.getElementById("sides").value
    totalOutcomes = Math.pow(s,n)
    favOutcomes = 0;
    let dices = populateDices()
    sum(0, dices)
    let result = ((favOutcomes/totalOutcomes)*100)//.toFixed(3) //does not work for very small probabilities past 3 decimal places
    document.getElementById("result").innerHTML = `Probablity of sum ${r} is ${result}%`
}
