
let coinFlip=0||1

do{

    let num = Math.round(Math.random())
    console.log(num)
    if(num === 0){
    console.log("Heads")
    }else{

    console.log("Tails, end of program")
    }
    coinFlip++

} while (coinFlip<20)
