const {test,expect}=require('@playwright/test');
const { count } = require('console');


test('RShetty Cart End 2 End Test Flow',async ({page}) =>
{
   await page.goto("https://rahulshettyacademy.com/client")
   expect(page.locator('.demo label')).toHaveAttribute('class','blink_me');
   const userName=page.locator("#userEmail");
    const password=page.locator("[formcontrolname='userPassword']")
    const login=page.locator("[name*='login']")
    await userName.fill("kameswararao.gandru1@gmail.com");
    await password.fill("Welcome123");
    await login.click()
    const productName='ZARA COAT 3'
    await page.waitForLoadState('networkidle');
    const products= page.locator('.card-body')
   const items= await page.locator('.card-body b').allTextContents()
   console.log(items)
    const size= await products.count()
    console.log(size)
    for(let i=0;i<size;++i )
    {
     if(await products.nth(i).locator('b').textContent() == productName)
     {
      // for(let j=1; j<5;j++)
      // {
         await products.nth(i).locator("text= Add To Cart").click()
      // }   
      
      break;
     }
    }
    await page.locator('[routerlink*=cart]').click()

    await page.locator('.cartSection').first().waitFor();

   const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator(".subtotal button").click();

    expect(await page.locator('.payment__title').first().textContent()).toContain(" Payment Method ");

    const dropdown=page.locator('.ddl');

    await dropdown.first().selectOption('02')
    await dropdown.last().selectOption('20')
    

   await page.pause()


}
)