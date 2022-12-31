
const partition = async(barItems,l,r) =>{
    let i = l - 1;

    barItems[r].style.background = "red";

    for (let j = l; j <= r - 1; j++) {
        barItems[j].style.background = "gray";

        await waitState(delay);

        if (parseInt(barItems[j].style.height) < parseInt(barItems[r].style.height) ) {

            i++;
            swapElement(barItems[i], barItems[j]);

            barItems[i].style.background = "orange";

            if(i != j){
                barItems[j].style.background = "orange";
            }
            await waitState(delay)
        }else{
            barItems[j].style.background = "purple";
        }
    }
    i++;
    await waitState(delay);
    swapElement(barItems[i],barItems[r]);

    barItems[r].style.background = "purple";
    barItems[i].style.background = "green";

    await waitState(delay);

    for (let k = 0; k < barItems.length; k++) {
        if(barItems[k].style.background != "green"){
            barItems[k].style.background = "blue";
        }
    }

    return i;
}

//quickSort
const quickSort = async(barItems,l,r) => {
    if(l < r){
        let pivot_index = await partition(barItems,l,r);
        console.log("pivot",pivot_index);
        await quickSort(barItems,l,pivot_index - 1);
        await quickSort(barItems, pivot_index + 1, r);
    }else{
        if(l >= 0 && r >= 0 && l < barItems.length && r < barItems.length){
            barItems[r].style.background = "green";
            barItems[l].style.background = "green";
        }
    }
}

//driver function
const quickSortDriver = async () => {
    const barItems = document.querySelectorAll(".bar");
    let l = 0;
    let r = parseInt(barItems.length) - 1;
    await quickSort(barItems, l, r);
}