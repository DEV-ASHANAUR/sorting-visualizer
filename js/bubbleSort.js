const bubbleSort = async () => {
    console.log("bubble")
    const barItems = document.querySelectorAll(".bar");
    for (let i = 0; i < barItems.length - 1; i++) {
        for (let j = 0; j < barItems.length - i - 1; j++) {
            barItems[j].style.background = "blue";
            barItems[j + 1].style.background = "blue";
            if (parseInt(barItems[j].style.height) > parseInt(barItems[j + 1].style.height)) {
                await waitState(delay);
                swapElement(barItems[j], barItems[j + 1]);
            }
            barItems[j].style.background = "red";
            barItems[j + 1].style.background = "red";
        }
        barItems[barItems.length - i - 1].style.background = "green";

    }
    barItems[0].style.background = "green";
}