document.addEventListener("DOMContentLoaded", function() {
    const worker = new Worker('./makeFunc.js')
    let blue = false
    let localcounter = 0;
    let counter = document.getElementById("counter");
    let increment = document.getElementById("increment");
    let api = document.getElementById("api");
    let fetchapi = document.getElementById("fetchapi");
    setTimeout(() => {
        let sum = 0
        for(let i = 0; i < 10000000000; i++){
            sum += i;
        }
        console.log(sum)

    },10000)
    
    increment.addEventListener("click", () => {
        localcounter++;
        counter.innerHTML = localcounter;
    });

    fetchapi.addEventListener("click", () => {
        fetch("https://pokeapi.co/api/v2/ability/2")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                api.innerHTML = JSON.stringify(data);
            })
            .catch(error => console.error('Error fetching data:', error));


        if(!blue){
                fetchapi.style.color = "blue"
                blue = !blue
            }
        else{               
            fetchapi.style.color = "black" 
            blue = !blue
        }
        worker.postMessage('hello')
    });
    worker.onmessage = (message) => alert(`The final sum is ${message.data}` )
});



