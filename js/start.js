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
    switch(selectedAlgo){
        case "bubble":
            await bubbleSort();
            enable();
            resetBtn();
            break;
        case "insertion":
            await insertionSort();
            enable();
            resetBtn();
            break;
        case "selection":
            await selectionSort();
            enable();
            resetBtn();
            break;
        case "merge":
            await mergeSortDriver();
            enable();
            resetBtn();
            break;
        case "quick":
            await quickSortDriver();
            enable();
            resetBtn();
            break;
        default:
            break;
    }

})