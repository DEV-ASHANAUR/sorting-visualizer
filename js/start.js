//start button 
const start = document.getElementById("startBtn");

//pause button 
const pause = document.getElementById("pauseBtn");

pause.addEventListener("click",()=>{
    resetBtn();
    location.reload();
})

const resetBtn = () =>{
    start.style.display = "block";
    pause.style.display = "none";
}

//this enevt will run when we click the start button
start.addEventListener("click",async()=>{
    start.style.display = "none";
    pause.style.display = "block";
    disable();

    // console.log({selectedAlgo})
    switch(selectedAlgo){
        case "bubble":
            await bubbleSort();
            enable();
            resetBtn();
            break;
        case "insertion":
            console.log("insertion");
            break;
        case "selection":
            await selectionSort();
            enable();
            resetBtn();
            break;
        case "merge":
            console.log("merge");
            break;
        case "quick":
            console.log("quick");
            break;
        default:
            break;
    }

})