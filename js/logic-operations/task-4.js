/* Объявите переменную month и проинициализируйте ее числом от 1 до 12.
Вычислите время года и выведите его в консоль. */

let month = 2;
// while(month<13){

if((month > 0) && (month < 3) || (month === 12)){
    console.log("Winter");
}
else if((month > 2) && (month < 5)){
    console.log("Spring");
}
else if((month > 5) && (month < 9)){
    console.log("Summer");
}
else if((month > 8) && (month < 12)){
    console.log("Fall");
}//end of if /else

// }
