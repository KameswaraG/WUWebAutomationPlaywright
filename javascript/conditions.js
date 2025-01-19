

function genderIdentification(gender)
{

    if(gender === 'Male')
    {
        console.log("Person is Male person")
    }
    else if(gender === 'Female')
    {
        console.log("Person is Female person")
    }

}

// Test the function

genderIdentification('Male')
genderIdentification('Female')
genderIdentification('Other')

// Test with an invalid input

genderIdentification(123)

// Test with a null input

genderIdentification(null)

// Test with an undefined input

genderIdentification(undefined)

// Test with an empty string

genderIdentification("")    

// Test with a string that is not a valid gender

genderIdentification("Male, Female")



/**
 * Nester if condition implmenation
 */

function nestedIfCondition(age)
{
    if(age < 0)
    {
        console.log("Age cannot be negative")
    }
    else if(age >= 0 && age <= 12)
    {
        if(age <=12)
        {
            console.log("Age is less than or equal to 12")
        }
        else if(age > 12 && age <= 18)
            {
                console.log("Age is between 13 and 18")
            }
        else if(age > 18)
            {
                console.log("Age is greater than 18")
            }    
        
    }
    
    
}

