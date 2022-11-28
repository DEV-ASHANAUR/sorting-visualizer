array = [12,7,14,8,10,3];

function sort(arr){
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
            
        }
        [arr[i],arr[min]] = [arr[min],arr[i]];
        
    }
}

sort(array);

console.log(array)