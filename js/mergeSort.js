//merge
const merge = async (barItems, l, m, r) => {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitState(delay);
        barItems[l + i].style.background = "orange";
        L[i] = barItems[l + i].style.height;
        // L[i].innerText = parseInt(barItems[l + i].style.height);
    }

    for (let j = 0; j < n2; j++) {
        await waitState(delay);
        barItems[m + 1 + j].style.background = "yellow";
        R[j] = barItems[m + 1 + j].style.height;
        // R[j].innerText = parseInt(barItems[m + 1 + j].style.height);
    }

    await waitState(delay);
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        await waitState(delay);
        if (parseInt(L[i]) <= parseInt(R[j])) {
            if ((n1 + n2) === barItems.length) {
                barItems[k].style.background = "green";
            } else {
                barItems[k].background = 'lightgreen';
            }
            barItems[k].style.height = L[i];
            barItems[k].innerText = parseInt(L[i]);
            i++;
            k++;
        } else {
            if ((n1 + n2) === barItems.length) {
                barItems[k].style.background = "green";
            } else {
                barItems[k].background = 'lightgreen';
            }
            barItems[k].style.height = R[j];
            barItems[k].innerText = parseInt(R[j]);
            j++;
            k++;
        }
    }

    //if remain n1
    while (i < n1) {
        await waitState(delay);
        if ((n1 + n2) === barItems.length) {
            barItems[k].style.background = "green";
        } else {
            barItems[k].background = 'lightgreen';
        }
        barItems[k].style.height = L[i];
        barItems[k].innerText = parseInt(L[i]);
        i++;
        k++;
    }

    //if remain n2
    while (j < n2) {
        await waitState(delay);
        if ((n1 + n2) === barItems.length) {
            barItems[k].style.background = "green";
        } else {
            barItems[k].background = 'lightgreen';
        }
        barItems[k].style.height = R[j];
        barItems[k].innerText = parseInt(R[j]);
        j++;
        k++;
    }
}
//merge sort function
const mergeSort = async (barItems, l, r) => {
    if (l >= r) {
        return; // return recursivly
    }
    let m = l + Math.floor((r - l) / 2);
    await mergeSort(barItems, l, m);
    await mergeSort(barItems, m + 1, r);
    await merge(barItems, l, m, r);
}
//driver function
const mergeSortDriver = async () => {
    const barItems = document.querySelectorAll(".bar");
    let l = 0;
    let r = parseInt(barItems.length) - 1;
    await mergeSort(barItems, l, r);
}