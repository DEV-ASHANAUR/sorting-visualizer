//start button 
const start = document.getElementById("startBtn");

//this enevt will run when we click the start button
start.addEventListener("click",()=>{
    // console.log({selectedAlgo})
    switch(selectedAlgo){
        case "bubble":
            bubbleSort();
            break;
        case "insertion":
            console.log("insertion");
            break;
        case "selection":
            console.log("selection");
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