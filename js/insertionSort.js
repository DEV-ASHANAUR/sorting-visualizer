const insertionSort = async () => {
    console.log("insertion sort");
    const barItems = document.querySelectorAll(".bar");
    barItems[0].style.background = 'green';
    for (let i = 1; i < barItems.length; i++) {
        // here key is the second element
        let key = barItems[i].style.height;
        //here j is the first element
        let j = i - 1;
        await waitState(delay);
        //checking if j < i or not if j is greater then i than from j >=0 swap the element
        while (j >= 0 && (parseInt(barItems[j].style.height) > parseInt(key))) {
            
            barItems[j].style.background = 'blue';
            barItems[j + 1].style.height = barItems[j].style.height;
            barItems[j + 1].innerText = parseInt(barItems[j].style.height);
            j--;

            await waitState(delay);
            //since here i to 0 all element are sorted initily for that we can initily change the color by green
            for (let k = i; k >= 0; k--) {
                console.log("first")
                barItems[k].style.background = 'green';
            }
        }
        // since j is already 1 less form the the while loop for that firstly we have to increment the index of j and take place the key,, cause j is empty here 
        barItems[j + 1].style.height = key;
        barItems[j + 1].innerText = parseInt(key);
        barItems[i].style.background = 'green';
    }
}