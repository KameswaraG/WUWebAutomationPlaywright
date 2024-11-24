const {test,expect} = require('@playwright/test');



test("Rahul Shetty test to validate all the products with Synchorization",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client")
    const userName=page.locator("#userEmail");
    const password=page.locator("[formcontrolname='userPassword']")
    const login=page.locator("[name*='login']")
    await userName.fill("kameswararao.gandru1@gmail.com");
    await password.fill("Welcome123");
    await login.click()
    const pageTile= await page.title();
    console.log(pageTile)
    await expect("Let's Shop").toEqual(pageTile);
    await page.waitForLoadState('networkidle'); //This statement will help to wait all the network calls to complete before starting next operation
    console.log(await page.locator(".card-body b").allTextContents());
}

)
