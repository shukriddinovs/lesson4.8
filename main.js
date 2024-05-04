// let arrey = [1,2,3,"tort"]
// let i = 0;
// while (i < arrey.length){
//     console.log(arrey[i]);
// }

let array = [2,4, 9, 10, 45, 67, 8, 90]
for (let i = 0;  i< array.length; i++) {
    let check = array[i] % 2;
    if (check === 0) {
        console.log("Bu juft son" +  array[i]);
        
    }else{
        console.log("Bu toq son" + array[i]);
    }
}





