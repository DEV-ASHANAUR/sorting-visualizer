const insertionSort = async () => {
    console.log("insertion sort");
    const barItems = document.querySelectorAll(".bar");
    barItems[0].style.background = 'green';
    for (let i = 1; i < barItems.length; i++) {
        let key = barItems[i].style.height;

        let j = i - 1;
        await waitState(delay);
        
        while (j >= 0 && (parseInt(barItems[j].style.height) > parseInt(key))) {
            
            barItems[j].style.background = 'blue';
            barItems[j + 1].style.height = barItems[j].style.height;
            barItems[j + 1].innerText = parseInt(barItems[j].style.height);
            j--;

            await waitState(delay);

            for (let k = i; k >= 0; k--) {
                console.log("first")
                barItems[k].style.background = 'green';
            }
        }
        barItems[j + 1].style.height = key;
        barItems[j + 1].innerText = parseInt(key);
        barItems[i].style.background = 'green';
    }
}