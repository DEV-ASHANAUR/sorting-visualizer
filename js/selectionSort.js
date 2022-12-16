const selectionSort = async () => {
    console.log("bubble")
    const barItems = document.querySelectorAll(".bar");
    for (let i = 0; i < barItems.length; i++) {
        let min = i;

        barItems[i].style.background = "blue";

        for (let j = i + 1; j < array.length; j++) {
            barItems[j].style.background = "purple";
            await waitState(delay);
            if (parseInt(barItems[j].style.height) < parseInt(barItems[min].style.height)) {

                if (min !== i) {
                    barItems[min].style.background = "red"
                }
                min = j;

            } else {
                barItems[j].style.background = "red";
            }

        }
        await waitState(delay);
        swapElement(barItems[min], barItems[i]);
        barItems[min].style.background = "red";
        barItems[i].style.background = "green";

    }
}