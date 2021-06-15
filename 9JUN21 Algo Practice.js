// Just a few easy ones to get the brain warmed up.

//Print all numbers 0-10.
function oneToTen(){
    for(var i=0; i<=10; i++){
        console.log(i);
    }
    return;
}
console.log(oneToTen());

//Print only the numbers from the array that are greater than 0.
function printPos(){
    var myArray = [2,90,-1,7,14,63];
    for(var i=0; i<=myArray.length; i++){
        if(myArray[i]>0){
            console.log(myArray[i]);
        }
    }
    return;
}
console.log(printPos());

//Write a function that takes in an amount of change and then says how many of each coin that is. 
function coinChange(cents){
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var diff = 0;
    remainder = 0;

    if (cents<=0){
        console.log("Cents amount must be greater than 0.");
        return;
    }
    console.log(cents + " cents breaks down into:")
    if(cents>=25){
        diff=cents/25;
        quarters=Math.floor(diff);
        console.log(quarters + " quarters");
        remainder=cents-(25*quarters);
        if(remainder>0){
            diff=remainder/10;
            dimes=Math.floor(diff);
            console.log(dimes + " dimes");
            remainder=remainder-(10*dimes);
            if(remainder>0){
                diff=remainder/5;
                nickels= Math.floor(diff);
                console.log(nickels + " nickels");
                remainder=remainder-(5*nickels);
                if(remainder>0){
                    console.log(remainder + " pennies");
                }
            }
        }
    }
    if(cents>=10 && cents<=24){
        diff=cents/10;
        dimes=Math.floor(diff);
        console.log(dimes + " dimes");
        remainder=cents-(10*dimes);
        if(remainder>0){
            diff=remainder/5;
            nickels= Math.floor(diff);
            console.log(nickels + " nickels");
            remainder=remainder-(5*nickels);
            if(remainder>0){
                console.log(remainder + " pennies");
            }
        }
    }
    if(cents>=5 && cents<=9){
        diff-cents/5;
        nickels=Math.floor(diff);
        console.log(nickels + " nickels");
        remainder=cents-(5*nickels);
        if(remainder>0){
            console.log(remainder + " pennies");
        }
    }
    if(cents<=4){
        console.log(cents + " pennies");
    }
}
console.log(coinChange(99));
// Find fibonacci value. So enter a number which is the index location and get the Fibonacci value back.
function fibonacci(index){
    arr=[0,1];
    if(index==0){
        return 0;
    }else if(index==1){
        return 1;
    }
    for(var i=2; i<=index; i++){
        arr[i]=arr[i-1]+arr[i-2];
        arr.push(arr[i]);
    }
    return arr[index];
}
console.log(fibonacci(9));