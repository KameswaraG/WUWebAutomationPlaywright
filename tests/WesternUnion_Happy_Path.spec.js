const {test,expect} = require('@playwright/test')


test("WU R3 Happy Path flow",async ({page}) =>{

  await page.goto("https://wudispatcher-uatrs2.westernunion.com/gb/en/home.html")
  expect(await page.title()).toContain("International money transfer | Western Union")
  const registerButton= page.locator("#sign-up-nav-item a")
  await registerButton.click()
  expect(await page.title()).toContain("Register with Western Union UK")
  const firstName=page.locator("#txtFName")
  const lastName=page.locator("[name*='txtLName']")
  const email= page.locator("#txtEmailAddr");
  const password= page.locator("#password")
  const checkBox=page.locator("[for*='chkMarketingOptions']")
  const registerButton1=page.locator("#button-continue")
  await Promise.all(
    [ page.waitForLoadState(), page.waitForEvent("requestfinished"),page.waitForSelector("#button-continue")]
  )
  
  
  await page.reload()


  await firstName.fill("Game");
 
  await lastName.fill("Changer")
  await password.fill("Welcome@123")
  await email.fill("sameple10@gmail.com")
  await checkBox.click()
  await registerButton1.click()
  const emailMFALink= page.locator("[amplitude-id$='link-verify-with-email']")
  await emailMFALink.click();
  const requestCode= page.locator("#button-request-code")
  await requestCode.click();
  //const otp=page.locator(".ng-star-inserted input")
  const otp= page.locator(".ng-star-inserted input")
  console.log(await otp.count())

  const staticPin="147272".toString()
  for (let index = 0; index < staticPin.length; index++) {
    await otp.nth(index).fill(staticPin[index])
    
  }
  //await  otp.fill(147272)
  const submit=page.locator("#button-submit")
  await  submit.click()
}
)