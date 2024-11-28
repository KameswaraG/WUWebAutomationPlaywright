const {test,expect} = require('@playwright/test')



test("Child Window Handling",async ({browser}) =>{

    const context= await browser.newContext()
    const page= await context.newPage()
   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const blinkingLink=page.locator("[href*='documents-request']")
  // await blinkingLink.click()
    const [newPagePromise]= await Promise.all(
        [context.waitForEvent('page'),  blinkingLink.click()]
    );

    await newPagePromise.waitForLoadState();

   const sampleText= await newPagePromise.locator(".red").textContent();
   console.log(sampleText)
   // await  text=  newPagePromise.locator('.red').textContent()

    // //const newPage=await newPagePromise
    // console.log(await newPagePromise.locator(".red").textContent())

}
);