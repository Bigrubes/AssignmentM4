let coinFlip = 0
do{
    let num = Math.round(Math.random())
    console.log(coinFlip)
    if(num === 0){
    console.log("Heads")
    }else{
        console.log("Tails")
    }
} while (coinFlip === "Tails")
console.log( "Tails, End of game")


