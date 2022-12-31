//menu toggle
const togglebar = document.getElementById("togglebar");
togglebar.addEventListener("click",()=>{
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("mobile");
})

// bar item slider
const sizeSlideValue = document.querySelector(".sizeSlider");
const sizeSlider = document.getElementById("arrSize");
sizeSlider.oninput = (() => {
    let value = sizeSlider.value;
    sizeSlideValue.textContent = value;
    // sizeSlideValue.style.left = (value / 2) + "%";
    sizeSlideValue.style.left = "50%";
    sizeSlideValue.classList.add("show");
});
sizeSlider.onblur = (() => {
    sizeSlideValue.classList.remove("show");
});

//bar array size catch
const arrSize = document.getElementById("arrSize");

//when slider value will be change 
arrSize.addEventListener("input", () => {
    // console.log("value of slider :" + arrSize.value);
    createNewBar(parseInt(arrSize.value));
});

//element swap
const swapElement = (n1,n2) =>{
    let temp = n1.style.height;
    n1.style.height = n2.style.height;
    n1.innerText = parseInt(n2.style.height);
    n2.style.height = temp;
    n2.innerText = parseInt(temp);
}

// wait state 
const waitState = (milisecond)=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("");
        },milisecond)
    })
}
//set delay; it's default for 260ms
let delay = 260;

// spreed slider
const spreedSlideValue = document.querySelector(".spreedSlider");
const spreedSlider = document.getElementById("spreed");

spreedSlider.oninput = (() => {
    let value = spreedSlider.value;
    delay = 320 - parseInt(value);
    spreedSlideValue.textContent = value;
    spreedSlideValue.style.left = "50%";
    spreedSlideValue.classList.add("show");
});
spreedSlider.onblur = (() => {
    spreedSlideValue.classList.remove("show");
});

//when browser refresh default bars size create autometically
createNewBar();

//create new array of bar element
function createNewBar(bars = 20) {
    //this function remove all existing bars
    removeBars();
    //this array store height of the bars
    array = [];
    //create random height for each bars and store this array
    for (let i = 0; i < bars; i++) {
        array.push(Math.floor(Math.random() * 190) + 10);
    }
    //get bars parent
    const barsDIV = document.getElementById("bars");

    //create bar item
    for (let i = 0; i < bars; i++) {
        const item = document.createElement("div");
        item.style.height = `${array[i]*2}px`;
        item.classList.add("bar");
        item.classList.add("bar-item");
        item.classList.add(`itemNo${i}`);
        item.innerText = `${array[i]*2}`;
        barsDIV.appendChild(item);
    }
}

//remove old bars
function removeBars() {
    document.getElementById("bars").innerHTML = "";
}

//create random size bar 
const random = document.getElementById("randomSize");

random.addEventListener("click",()=>{
    //call the bar creator function
    createNewBar(parseInt(arrSize.value));
});

const descriptionLoad = (type) =>{
    switch(type){
        case "bubble":
            document.querySelector(".bubble-description").style.display = "flex";
            document.querySelector(".insertion-description").style.display = "none";
            document.querySelector(".selection-description").style.display = "none";
            document.querySelector(".merge-description").style.display = "none";
            document.querySelector(".quick-description").style.display = "none";
            break;
        case "insertion":
            document.querySelector(".bubble-description").style.display = "none";
            document.querySelector(".insertion-description").style.display = "flex";
            document.querySelector(".selection-description").style.display = "none";
            document.querySelector(".merge-description").style.display = "none";
            document.querySelector(".quick-description").style.display = "none";
            break;
        case "selection":
            document.querySelector(".bubble-description").style.display = "none";
            document.querySelector(".insertion-description").style.display = "none";
            document.querySelector(".selection-description").style.display = "flex";
            document.querySelector(".merge-description").style.display = "none";
            document.querySelector(".quick-description").style.display = "none";
            break;
        case "merge":
            document.querySelector(".bubble-description").style.display = "none";
            document.querySelector(".insertion-description").style.display = "none";
            document.querySelector(".selection-description").style.display = "none";
            document.querySelector(".merge-description").style.display = "flex";
            document.querySelector(".quick-description").style.display = "none";
            break;
        case "quick":
            document.querySelector(".bubble-description").style.display = "none";
            document.querySelector(".insertion-description").style.display = "none";
            document.querySelector(".selection-description").style.display = "none";
            document.querySelector(".merge-description").style.display = "none";
            document.querySelector(".quick-description").style.display = "flex";
            break;
    }
}

//catch selected sort algorithms for sorting
let selectedAlgo;

function  catchValue() {
    selectedAlgo = document.getElementById("algoSelected").value;
    descriptionLoad(selectedAlgo);
}
//when the page will load first time auto set the selected value
catchValue();



const disable = () =>{
    document.getElementById("algoSelected").disabled = true;
    document.getElementById("arrSize").disabled = true;
    document.getElementById("randomSize").disabled = true;
}

const enable = () =>{
    document.getElementById("algoSelected").disabled = false;
    document.getElementById("arrSize").disabled = false;
    document.getElementById("randomSize").disabled = false;
}

