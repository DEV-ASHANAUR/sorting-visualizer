//menu toggle
const togglebar = document.addEventListener("click",()=>{
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

// spreed slider
const spreedSlideValue = document.querySelector(".spreedSlider");
const spreedSlider = document.getElementById("spreed");
spreedSlider.oninput = (() => {
    let value = spreedSlider.value;
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
})