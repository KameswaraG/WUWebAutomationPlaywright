const {test,expect} = require('@playwright/test');



test("UI validations",async({page})=>
{
        const userName=page.locator('input#username')
        const signIn=page.locator('#signInBtn')
        const blinkingLink=page.locator("[href*='documents-request']")
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
        await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
        //await page.locator('input#username').fill('rahulshettya')
        await userName.pressSequentially("rahulshettya")
        await page.locator("[name=\'password\']").fill('learning')
        await page.locator("select.form-control").selectOption("consult")
        await page.locator("input#usertype").last().click()
        await page.locator("button#okayBtn").click()
        const isSelected= await page.locator("input#usertype").last().isChecked()
        console.log(isSelected)
        expect(await page.locator("input#usertype").last()).toBeChecked()
        await page.locator("#terms").click()
        expect(await page.locator("#terms").isChecked()).toBeTruthy()
        expect(await page.locator("#terms")).toBeChecked()
        await page.locator("#terms").uncheck()
        expect(await page.locator("#terms").isChecked()).toBeFalsy()
        await expect(blinkingLink).toHaveAttribute('class','blinkingText');
        //await page.pause()

        await Promise.all([
            
        ])
}

)



test("Handling Multiple Windows", async ({browser})=>
{
    const context= await browser.newContext()
    const page= await context.newPage()
    const blinkingLink=page.locator("[href*='documents-request']")
    page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   const newPage= await Promise.all(
        [context.waitForEvent('page'),blinkingLink.click(),]
    )

    
    const text=  newPage.locator('.red')
    //console.log(await text.)

})
