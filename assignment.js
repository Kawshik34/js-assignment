// https://github.com/Kawshik34/js-assignment

//          *** Problem 1: Convert Kilometer To Meter ***

function kilometerToMeter(kilometer) // define a function named kilometerToMeter.
    {   
        if(kilometer>1)
            {
                var meter = kilometer*1000; // As we know 1kilometer = 1000 meter. 
                return meter; // returning to the function.
            }
        else
            {
                meter="please input a valid value"; // defining a result for unusual value.
                return meter;
            }
        
    }

    var result = kilometerToMeter(-2); // calling the function by inputting a value.
    console.log(result); // showing the result.



//          *** Problem 2: Calculating Budget of 3 Buying Items ***

function budgetCalculator(watch,mobile,laptop) // defining the function named budgetCalculator with 3 parameter.
    {
        if (watch>=0,mobile>=0,laptop>=0) // giving a condition for valid input.
            {
                var totalCost = (watch*50)+(mobile*100)+(laptop*500); // calculating the total cost
                return totalCost;
            }
        else 
            {
                totalCost ="please input a valid value"; // defining a result for unusual value.
                return totalCost;
            }
    }

    var result = budgetCalculator(1,2,3); // calling the function by defining its 3 parameter with value.
    console.log(result); // showing the result.



//          *** Problem 3: Calculating Budget of Days Spending Nights In Hotel ***

function hotelCost(day) // defining a function named hotelCost.
    {
        var cost =0; //initilazing a variable named cost with 0 value.

        if(day<=10 && day>=1) // defining condition as mentioned assignment requirement.
            {
                cost = day*100; //cost calculation for first 10 days
                return cost;
            }
        else if(day<=20 && day>=1) // defining condition as mentioned assignment requirement.
            {
                cost = 1000+(day-10)*80; //cost calculation for 2nd 10 days
                return cost;
            }
        else if(day>20) // defining condition as mentioned assignment requirement.
            {
                cost = 1800+(day-20)*50; //cost calculation for from 21 days to infinity.
                return cost;
            }
        else
            {
                cost = "please input at least one day"; // defining a result for unusual value.
                return cost;
            }
    }  
    
    var result = hotelCost(15); // calling the function by inputting a value.
    console.log(result); // showing the result.



//          *** Problem 4: Finding The First Longest Name From An Array ***

function megaFriend(name) //defining the function named megaFriend.
    {
        var maximum = [0]; //declearing variable length.

        for (var i = 0; i < name.length; i++) // using a for loop for finding the longest name.
            {
                if (name[i].length > maximum) // defining a condition for process.
                {
                    maximum = name[i].length; // comparing from its first declaring 0 position string.
                    var longest = name[i]; // containing the largest string
                }
            }
            return longest;
    }

    var result =megaFriend(["riaj","dipjol","misha soudagor","kabila","katrina"]); // Array Declaring
    console.log(result); //showing result
