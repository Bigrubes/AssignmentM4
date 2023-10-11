
let num = prompt("How many times do you want to loop?")
// console.log(num)
    for (let i = 0; i<num; i++){
        let coinFlip = Math.round(Math.random())
        // console.log(coinFlip)
        if (coinFlip === 0){
        console.log("Heads")
        }else{
            console.log("Tails")
        }

    }

