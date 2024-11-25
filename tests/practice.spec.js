const {test}=require('@playwright/test')


// test('Sample Running the test', ({browser})=>
// {


// }

// );


test('Launching Browser',async ({page})=>
{


await page.goto('https://rahulshettyacademy.com/loginpagePractise/')


});