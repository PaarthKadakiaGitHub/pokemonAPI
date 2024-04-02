// function greeting(name){
//     console.log("my name is" + name)
// }

// function tocallback(cb){
//     var name = prompt("enter name")
//     cb(name)
// }

// tocallback(greeting)

self.onmessage = function(message){
    console.log(message)
    let sum = 0
    for(let i = 0; i < 10000000000; i++){
        sum += i;
    }
    postMessage(sum)
}