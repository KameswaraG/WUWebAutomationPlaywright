
/**
 * We will demonstrate Switch case usage in the following example
 */

// let day=" 1 ";

// console.log(day.trim())
// console.log(Number(day))

let day;
function dayOfTheWeek(dayNumber)
{
    switch(dayNumber) 
    {
        case 0:
            day="Sunday"
            break;
            
        case 1:
            day="Monday"
            break;
            
        case 2:
            day="Tuesday"
            break;
            
        case 3:
            day="Wednesday"
            break;
            
        case 4:
            day="Thursday"
            break;
            
        case 5:
            day="Friday"
            break;
            
        case 6:
            day="Saturday"
            break;
            
        default:
            day="Invalid day number"
            break;

    }

    console.log(day)
      
}

// dayOfTheWeek(5) // Outputs: Friday
//  dayOfTheWeek(7) // Outputs: Invalid day number
//  dayOfTheWeek(-1) // Outputs: Invalid day number
//  dayOfTheWeek(10) // Outputs: Invalid day number
//  dayOfTheWeek(0) // Outputs: Sunday
//  dayOfTheWeek(6) // Outputs: Saturday
//  dayOfTheWeek(3) // Outputs: Wednesday
//  dayOfTheWeek(4) // Outputs: Thursday
//  dayOfTheWeek(2) // Outputs: Tuesday
//  dayOfTheWeek(1) // Outputs: Monday
//  dayOfTheWeek(8) // Outputs: Invalid day number
//  dayOfTheWeek(15) // Outputs: Invalid day number
//  dayOfTheWeek(20) // Outputs: Invalid day number
//  dayOfTheWeek(25) // Outputs: Invalid day number
//  dayOfTheWeek(30) // Outputs: Invalid day number


 function launchBrowser(browser)
 {
    switch(browser)
    {
        case 'chrome':
            return "chrome";
        case 'firefox':
            return "firefox";
        case 'safari':
            return "safari";
        default:
            return "Invalid browser name"

    }
   
 }

 console.log(launchBrowser('chrome')) // Outputs: chrome


 
