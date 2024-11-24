
const {test,expect}=require('@playwright/test')

//test case to create a context and launch a new window
test("Context cration Test",async ({browser})=>
{
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    console.log(await page.title());
}

);

//sample test case to directly launch a browser

test('Playwright test without pageContext',async ( {page}) =>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
    await page.locator('input#username').fill('rahulshettyacademy')
    await page.locator("[name=\'password\']").fill('learning')
    await page.locator('#signInBtn').click()

}
);


test.only('Playwright test to add Assertion',async ( {page}) =>
    {
        const userName=page.locator('input#username')
        const signIn=page.locator('#signInBtn')
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
        await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
        //await page.locator('input#username').fill('rahulshettya')
        await userName.fill("rahulshettya")
        await page.locator("[name=\'password\']").fill('learning')
        //await page.locator('#signInBtn').click()
        await signIn.click()
        const errorMessage= await page.locator("[style*='block']").textContent();
        console.log(errorMessage)
        await expect(errorMessage).toContain("Incorrect")
        await userName.fill("")
        await userName.fill("rahulshettyacademy")
        await signIn.click()

        console.log(await page.locator(".card-body a").first().textContent())
        console.log(await page.locator(".card-body a").last().textContent())
        console.log(await page.locator(".card-body a").nth(1).textContent())

    }
    );
