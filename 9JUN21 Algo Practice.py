# //Print all numbers 0-10.

def oneToTen():
    for x in range(11):
        print (x)
    return
oneToTen()

# //Print only the numbers from the array that are greater than 0.
array = [2,90,-1,7,14,63]
def printPos():
    for x in range(len(array)):
        if(array[x]>0):
            print(array[x])
    return
printPos()

# //Write a function that takes in an amount of change and then says how many of each coin that is.
import math
quarters = 0
dimes = 0
nickels = 0
remainder = 0
diff = 0

def coinChange(cents):
    if(cents<=0):
        print("Cents amount must be greater than 0.")
        return
    print(cents, "cents breaks down into:")
    if(cents>=25):
        diff=cents/25
        quarters=math.floor(diff)
        print(quarters, "quarters")
        remainder=cents-(25*quarters)
        if(remainder>0):
            diff=remainder/10
            dimes=math.floor(diff)
            print(dimes, "dimes")
            remainder=remainder-(10*dimes)
            if(remainder>0):
                diff=remainder/5
                nickels=math.floor(diff)
                print(nickels, "nickels")
                remainder=remainder-(5*nickels)
                if(remainder>0):
                    print(remainder, "pennies")
    if(cents>=10 and cents<=24):
        diff=cents/10
        dimes=math.floor(diff)
        print(dimes, "dimes")
        remainder=cents-(10*dimes)
        if(remainder>0):
            diff=remainder/5
            nickels= math.floor(diff)
            print(nickels, "nickels")
            remainder=remainder-(5*nickels)
            if(remainder>0):
                print(remainder, "pennies")
    if(cents>=5 and cents<=9):
        diff=cents/5
        nickels=math.floor(diff)
        print(nickels, "nickels")
        remainder=cents-(5*nickels)
        if(remainder>0):
            print(remainder, "pennies")
    if(cents<=4):
        print(cents, "pennies")
coinChange(5)

# // Find fibonacci value. So enter a number which is the index location and get the Fibonacci value back.
arr=[0,1]
def fibonacci(index):
    if(index==0):
        return 0
    elif(index==1):
        return 1
    for i in range(2, index+1):
        arr.append(i)  
        arr[i]=arr[i-1]+arr[i-2]
    return arr[index]
print(fibonacci(9))