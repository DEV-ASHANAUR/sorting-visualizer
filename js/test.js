array = [12,7,14,8,10,3];

// function selectionSort(arr){
//     for (let i = 0; i < array.length; i++) {
//         let min = i;
//         for (let j = i+1; j < array.length; j++) {
//             if(arr[j] < arr[min]){
//                 min = j;
//             }
            
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]];
        
//     }
// }

// selectionSort(array);

// console.log(array)

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
}

insertionSort(array);

console.log(array)
